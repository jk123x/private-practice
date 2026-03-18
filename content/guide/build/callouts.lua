-- Pandoc Lua filter: converts Obsidian-style callouts into Typst callout boxes
-- Detects patterns like: > [!tip]
-- Also handles drop caps: first paragraph after H1 gets drop cap styling

-- Map callout type to display label
local function callout_label(type)
  if type == "tip" then return "Tip"
  elseif type == "warning" then return "Warning"
  elseif type == "key-takeaway" then return "Key Takeaway"
  elseif type == "key-number" then return "Key Numbers"
  elseif type == "action" then return "Action Checklist"
  elseif type == "tldr" then return "TL;DR"
  elseif type == "example" then return "Example"
  elseif type == "mistake" then return "Common Mistake"
  else return type:gsub("^%l", string.upper):gsub("-", " ")
  end
end

-- Convert inline elements to Typst markup
local function inlines_to_typst(inlines)
  local result = {}
  for _, inline in ipairs(inlines) do
    if inline.t == "Str" then
      local s = inline.text
      s = s:gsub("#", "\\#")
      s = s:gsub("@", "\\@")
      s = s:gsub("%$", "\\$")
      table.insert(result, s)
    elseif inline.t == "Space" then
      table.insert(result, " ")
    elseif inline.t == "SoftBreak" then
      table.insert(result, "\n")
    elseif inline.t == "LineBreak" then
      table.insert(result, "\\\n")
    elseif inline.t == "Strong" then
      table.insert(result, "*" .. inlines_to_typst(inline.content) .. "*")
    elseif inline.t == "Emph" then
      table.insert(result, "_" .. inlines_to_typst(inline.content) .. "_")
    elseif inline.t == "Code" then
      local code = inline.text:gsub("`", "\\`")
      table.insert(result, "`" .. code .. "`")
    elseif inline.t == "Link" then
      local text = inlines_to_typst(inline.content)
      table.insert(result, "#link(\"" .. inline.target .. "\")[" .. text .. "]")
    elseif inline.t == "RawInline" then
      table.insert(result, inline.text)
    else
      table.insert(result, pandoc.utils.stringify(inline))
    end
  end
  return table.concat(result)
end

-- Convert a block to Typst markup
local function block_to_typst(block)
  if block.t == "Para" or block.t == "Plain" then
    return inlines_to_typst(block.content)
  elseif block.t == "BulletList" then
    local items = {}
    for _, item in ipairs(block.content) do
      local item_text = {}
      for _, b in ipairs(item) do
        table.insert(item_text, block_to_typst(b))
      end
      table.insert(items, "  - " .. table.concat(item_text, "\n"))
    end
    return table.concat(items, "\n")
  elseif block.t == "OrderedList" then
    local items = {}
    for i, item in ipairs(block.content) do
      local item_text = {}
      for _, b in ipairs(item) do
        table.insert(item_text, block_to_typst(b))
      end
      table.insert(items, "  + " .. table.concat(item_text, "\n"))
    end
    return table.concat(items, "\n")
  else
    return pandoc.utils.stringify(block)
  end
end

-- Make tables full-width
function Table(el)
  local ncols = #el.colspecs
  if ncols == 0 then return nil end
  for i = 1, ncols do
    if el.colspecs[i][2] == pandoc.ColWidthDefault or el.colspecs[i][2] == 0 then
      el.colspecs[i][2] = 1 / ncols
    end
  end
  return el
end

-- Check if a blockquote is an Obsidian-style callout
local function get_obsidian_callout(block)
  if block.t ~= "BlockQuote" then return nil end
  if #block.content == 0 then return nil end

  local first_block = block.content[1]
  if first_block.t ~= "Para" and first_block.t ~= "Plain" then return nil end

  local text = pandoc.utils.stringify(first_block)
  local callout_type = text:match("^%[!([%w-]+)%]")
  if callout_type then
    return callout_type
  end
  return nil
end

-- Handle blockquotes — convert Obsidian callouts to Typst
function BlockQuote(block)
  local callout_type = get_obsidian_callout(block)
  if not callout_type then return nil end

  -- Build content, stripping the [!type] marker from the first paragraph
  local content_parts = {}

  local first_block = block.content[1]
  local first_text = pandoc.utils.stringify(first_block)
  -- Remove the [!type] line and get remaining content from first block
  local after_marker = first_text:match("^%[![%w-]+%]%s*(.*)$")
  if after_marker and after_marker ~= "" then
    table.insert(content_parts, after_marker)
  end

  -- Rebuild first block without the marker line
  -- The first block might have the marker on its own line with content after
  local first_inlines = first_block.content
  local cleaned_inlines = {}
  local past_marker = false
  for _, inline in ipairs(first_inlines) do
    if not past_marker then
      if inline.t == "Str" and inline.text:match("^%[!") then
        -- Skip the marker token
      elseif inline.t == "Str" and inline.text:match("^[%w-]+%]") then
        -- Skip the closing part of the marker
        past_marker = true
      elseif inline.t == "SoftBreak" or inline.t == "LineBreak" then
        past_marker = true
      elseif inline.t == "Space" then
        -- Skip spaces around marker
      else
        past_marker = true
        table.insert(cleaned_inlines, inline)
      end
    else
      table.insert(cleaned_inlines, inline)
    end
  end

  -- Rebuild content parts from cleaned inlines
  content_parts = {}
  if #cleaned_inlines > 0 then
    table.insert(content_parts, inlines_to_typst(cleaned_inlines))
  end

  -- Handle remaining blocks in the callout
  for i = 2, #block.content do
    table.insert(content_parts, block_to_typst(block.content[i]))
  end

  local content = table.concat(content_parts, "\n\n")
  local label = callout_label(callout_type)

  local typst_code = string.format(
    '#callout("%s", "%s")[%s]',
    callout_type,
    label,
    content
  )

  return pandoc.RawBlock("typst", typst_code)
end

-- Add drop caps to first paragraph after H1 headings
function Blocks(blocks)
  local result = pandoc.List()
  local after_h1 = false

  for _, block in ipairs(blocks) do
    if block.t == "Header" and block.level == 1 then
      after_h1 = true
      result:insert(block)
    elseif after_h1 and block.t == "Header" then
      result:insert(block)
    elseif after_h1 and block.t == "RawBlock" then
      -- Callout boxes between H1 and first paragraph — skip them for drop cap
      result:insert(block)
    elseif after_h1 and (block.t == "Para" or block.t == "Plain") then
      after_h1 = false
      local inlines = block.content
      if #inlines > 0 and inlines[1].t == "Str" and #inlines[1].text > 0 then
        local first_char = inlines[1].text:sub(1, 1)
        local rest_text = inlines[1].text:sub(2)
        local remaining = {}
        if #rest_text > 0 then
          table.insert(remaining, rest_text)
        end
        for j = 2, #inlines do
          table.insert(remaining, inlines_to_typst({inlines[j]}))
        end
        local body_typst = table.concat(remaining)
        local raw = string.format('#dropcap[%s][%s]', first_char, body_typst)
        result:insert(pandoc.RawBlock("typst", raw))
      else
        result:insert(block)
      end
    else
      after_h1 = false
      result:insert(block)
    end
  end

  return result
end
