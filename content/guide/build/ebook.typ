// Private Practice Guide — Typst styling module
// Deep slate + warm amber palette, Charter + Avenir Next typography

// ─── Colour Palette ───
#let colour-primary = rgb("#1e293b")    // Slate 800 — headings, chapter openers
#let colour-body = rgb("#334155")       // Slate 700 — body copy
#let colour-muted = rgb("#94a3b8")      // Slate 400 — headers/footers, captions
#let colour-accent = rgb("#d97706")     // Amber 600 — list markers, rules, highlights
#let colour-bg-light = rgb("#f8fafc")   // Slate 50 — table header bg
#let colour-border = rgb("#e2e8f0")     // Slate 200 — table rules, dividers
#let colour-cover = rgb("#0f172a")      // Slate 900 — cover background
#let colour-h3 = rgb("#475569")         // Slate 600 — H3 text, callout labels

// ─── Drop Cap (raised initial) ───
#let dropcap(letter, body) = {
  set par(first-line-indent: 0pt)
  box(
    height: 1em,
    baseline: 0.05em,
    inset: (top: -0.6em),
  )[#text(
    font: ("Charter", "Georgia"),
    size: 2.6em,
    fill: colour-accent,
    top-edge: "cap-height",
  )[#letter]]
  h(3pt)
  body
}

// ─── Stat Highlight (key number + context) ───
#let stat-highlight(number, label, description, accent: none, bg: none) = {
  let effective-accent = if accent != none { accent } else { colour-accent }
  let effective-bg = if bg != none { bg } else { rgb("#fffbeb") }
  block(
    width: 100%,
    breakable: false,
    inset: (x: 24pt, y: 18pt),
    radius: 4pt,
    fill: effective-bg,
    stroke: (left: 3pt + effective-accent),
    above: 16pt,
    below: 16pt,
  )[
    #text(font: "Avenir Next", size: 26pt, weight: "bold", fill: effective-accent)[#number]
    #h(12pt)
    #text(font: "Avenir Next", size: 11pt, weight: "medium", fill: colour-primary)[#label]
    #v(4pt)
    #text(size: 10.5pt, fill: colour-body)[#description]
  ]
}

// ─── Callout Box Function ───
#let callout(type, label, body) = {
  let (border-colour, bg-colour) = if type == "tip" {
    (rgb("#059669"), rgb("#ecfdf5"))   // Emerald
  } else if type == "warning" {
    (rgb("#d97706"), rgb("#fffbeb"))   // Amber
  } else if type == "key-takeaway" {
    (rgb("#0e7490"), rgb("#ecfeff"))   // Cyan
  } else if type == "key-number" {
    (rgb("#7c3aed"), rgb("#f5f3ff"))   // Violet
  } else if type == "action" {
    (rgb("#2563eb"), rgb("#eff6ff"))   // Blue
  } else if type == "tldr" {
    (rgb("#475569"), rgb("#f8fafc"))   // Slate
  } else if type == "example" {
    (rgb("#2563eb"), rgb("#eff6ff"))   // Blue
  } else if type == "mistake" {
    (rgb("#e11d48"), rgb("#fff1f2"))   // Rose
  } else {
    (rgb("#7c3aed"), rgb("#f5f3ff"))   // Violet (default)
  }

  block(
    width: 100%,
    breakable: (type == "action" or type == "tldr"),
    inset: (left: 16pt, right: 16pt, top: 14pt, bottom: 14pt),
    radius: 4pt,
    fill: bg-colour,
    stroke: (left: 2.5pt + border-colour),
    above: 20pt,
    below: 20pt,
  )[
    #text(font: "Avenir Next", weight: "semibold", fill: colour-h3, size: 10.5pt)[#label]
    #v(5pt)
    #text(size: 10.5pt, fill: colour-body)[#body]
  ]
}

// ─── Main Document Config ───
#let conf(
  title: none,
  subtitle: none,
  authors: (),
  date: none,
  abstract: none,
  cols: 1,
  margin: (top: 80pt, bottom: 72pt, left: 72pt, right: 72pt),
  paper: "a4",
  lang: "en",
  region: "AU",
  font: (),
  fontsize: 11pt,
  heading-numbering: none,
  toc: false,
  toc-title: none,
  toc-indent: auto,
  toc-depth: none,
  body,
) = {
  // Page setup
  set page(
    paper: paper,
    margin: margin,
  )

  // Base typography
  set text(
    font: ("Charter", "Georgia"),
    size: 11.5pt,
    fill: colour-body,
    lang: lang,
    region: region,
  )

  set par(
    leading: 1.0em,
    justify: false,
    first-line-indent: 0pt,
    spacing: 1.3em,
  )

  // Heading styles
  set heading(numbering: heading-numbering)

  show heading.where(level: 1): it => {
    pagebreak(weak: true)

    let heading-text = if it.body.has("text") { it.body.text } else { "" }
    let chapter-num = none
    let chapter-title = it.body

    let match = heading-text.match(regex("^Chapter (\\d+):\\s*(.+)$"))
    if match != none {
      chapter-num = match.captures.at(0)
      chapter-title = match.captures.at(1)
    }

    if chapter-num != none {
      v(80pt)
      block(width: 100%)[
        #text(
          font: "Avenir Next",
          size: 9pt,
          weight: "medium",
          fill: colour-muted,
          tracking: 4pt,
        )[CHAPTER #chapter-num]
        #v(12pt)
        #text(
          font: ("Charter", "Georgia"),
          size: 28pt,
          weight: "bold",
          fill: colour-primary,
          tracking: -0.3pt,
        )[#chapter-title]
        #v(8pt)
        #line(length: 40pt, stroke: 1.5pt + colour-accent)
      ]
      v(24pt)
    } else {
      v(80pt)
      block(width: 100%)[
        #text(
          font: ("Charter", "Georgia"),
          size: 28pt,
          weight: "bold",
          fill: colour-primary,
          tracking: -0.3pt,
        )[#it.body]
        #v(8pt)
        #line(length: 40pt, stroke: 1.5pt + colour-accent)
      ]
      v(24pt)
    }
  }

  show heading.where(level: 2): it => {
    block(breakable: false, above: 32pt, below: 0pt)[
      #text(
        font: "Avenir Next",
        size: 16pt,
        weight: "semibold",
        fill: colour-primary,
      )[#it.body]
      #box(height: 60pt, width: 0pt)
    ]
    v(12pt)
  }

  show heading.where(level: 3): it => {
    block(breakable: false, above: 32pt, below: 0pt)[
      #text(
        font: "Avenir Next",
        size: 13pt,
        weight: "semibold",
        fill: colour-primary,
      )[#it.body]
      #v(3pt)
      #line(length: 24pt, stroke: 1pt + colour-accent)
    ]
    v(10pt)
  }

  // Link styling
  show link: it => {
    text(fill: colour-accent)[#underline(it)]
  }

  // Table styling
  set table(
    stroke: none,
    inset: (x: 10pt, y: 8pt),
    fill: (_, row) => if row == 0 { rgb("#1e293b") } else {
      if calc.odd(row) { white } else { rgb("#f8fafc") }
    },
  )

  show table.cell.where(y: 0): set text(
    font: "Avenir Next",
    fill: white,
    weight: "semibold",
    size: 9.5pt,
  )
  show table.cell: set text(size: 10pt)

  show table: it => {
    v(10pt)
    block(
      width: 100%,
      stroke: (bottom: 0.5pt + colour-border),
    )[
      #set table(stroke: (bottom: 0.5pt + colour-border, rest: none))
      #it
    ]
    v(10pt)
  }

  // List styling
  set list(indent: 16pt, body-indent: 8pt, marker: text(fill: colour-accent)[•])
  set enum(indent: 16pt, body-indent: 8pt)

  // Keep code blocks on one page
  show raw.where(block: true): it => block(breakable: false)[#it]

  // ─── Cover Page ───
  page(
    margin: 0pt,
    header: none,
    footer: none,
  )[
    #block(
      width: 100%,
      height: 100%,
      fill: colour-cover,
    )[
      // Geometric accent — warm amber diagonal stripe
      #place(
        top + right,
        dx: 0pt,
        dy: 0pt,
        polygon(
          fill: rgb("#1e293b"),
          (100%, 0pt),
          (60%, 0pt),
          (100%, 180pt),
        )
      )
      #place(
        top + right,
        dx: 0pt,
        dy: 0pt,
        polygon(
          fill: rgb("#334155"),
          (100%, 0pt),
          (85%, 0pt),
          (100%, 80pt),
        )
      )

      // Brand mark — top left
      #place(top + left, dx: 40pt, dy: 40pt)[
        #text(
          font: "Avenir Next",
          size: 9pt,
          fill: colour-accent,
          weight: "bold",
          tracking: 4pt,
        )[PRIVATE PRACTICE GUIDE]
      ]

      // Main title
      #align(center + horizon)[
        #block(width: 90%)[
          #text(
            font: "Avenir Next",
            size: 16pt,
            weight: "medium",
            fill: white.transparentize(45%),
            tracking: 1pt,
          )[THE ALLIED HEALTH]
          #v(12pt)
          #text(
            font: ("Charter", "Georgia"),
            size: 68pt,
            weight: "regular",
            style: "italic",
            fill: white,
            tracking: -1.5pt,
          )[Practice]
          #v(-8pt)
          #text(
            font: ("Charter", "Georgia"),
            size: 68pt,
            weight: "regular",
            style: "italic",
            fill: white,
            tracking: -1.5pt,
          )[Setup Guide]
          #v(24pt)
          #line(length: 80pt, stroke: 2.5pt + colour-accent)
        ]
      ]

      // Subtitle — bottom
      #place(bottom + center, dy: -60pt)[
        #text(
          font: ("Charter", "Georgia"),
          size: 13pt,
          fill: white.transparentize(45%),
          style: "italic",
        )[Medicare, Pricing, Clients & Business — Real Numbers, No Fluff]
      ]

      // Edition — bottom right
      #place(bottom + right, dx: -40pt, dy: -40pt)[
        #text(
          font: "Avenir Next",
          size: 9pt,
          fill: colour-accent.transparentize(40%),
        )[2025–26]
      ]
    ]
  ]

  // ─── Table of Contents (with copyright at bottom) ───
  page(
    header: none,
    footer: none,
  )[
    #v(40pt)
    #text(
      font: "Avenir Next",
      size: 24pt,
      weight: "bold",
      fill: colour-primary,
    )[Contents]
    #v(4pt)
    #line(length: 40pt, stroke: 1.5pt + colour-accent)
    #v(24pt)
    #set text(font: "Avenir Next", size: 11pt)
    #outline(
      title: none,
      indent: 16pt,
      depth: 1,
    )
    #v(1fr)
    #block(width: 100%)[
      #set text(size: 7.5pt, fill: colour-muted)
      #set par(leading: 0.6em)
      © 2025 Private Practice Guide. All rights reserved. This guide contains general information about starting an allied health private practice in Australia. It is not financial, legal, or medical advice. Verify current figures with relevant authorities before making decisions. Information current as of FY2025–26. privatepracticeguide.com.au
    ]
  ]

  // ─── Page Header/Footer for Body ───
  set page(
    header: context {
      if calc.odd(here().page()) {
        align(right)[
          #text(font: "Avenir Next", size: 8pt, fill: colour-muted)[Private Practice Guide]
        ]
      } else {
        align(left)[
          #text(font: "Avenir Next", size: 8pt, fill: colour-muted)[The Allied Health Practice Setup Guide]
        ]
      }
      v(-4pt)
      line(length: 100%, stroke: 0.5pt + colour-border)
    },
    footer: context {
      align(center)[
        #text(font: "Avenir Next", size: 8pt, fill: colour-muted)[
          #counter(page).display("1")
        ]
      ]
    },
  )

  // Reset page counter for body
  counter(page).update(1)

  // ─── Body Content ───
  body
}
