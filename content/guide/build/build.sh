#!/bin/bash
# Build the Private Practice Guide PDF from markdown chapters
# Usage: ./build.sh [chapter-number]
#   No args = build full guide
#   With arg = build single chapter (e.g., ./build.sh 01)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
CHAPTERS_DIR="$SCRIPT_DIR/.."
OUTPUT_DIR="$CHAPTERS_DIR/output"
TYPST_MODULE="$SCRIPT_DIR/ebook.typ"
PANDOC_TEMPLATE="$SCRIPT_DIR/pandoc-template.typ"
FILTER="$SCRIPT_DIR/callouts.lua"

mkdir -p "$OUTPUT_DIR"

PANDOC_ARGS="--pdf-engine=typst --pdf-engine-opt=--root=/ --template=$PANDOC_TEMPLATE --metadata template=$TYPST_MODULE --lua-filter=$FILTER --resource-path=$CHAPTERS_DIR"

if [ -n "$1" ]; then
  # Single chapter build
  CHAPTER_FILE=$(ls "$CHAPTERS_DIR"/*${1}*.md 2>/dev/null | head -1)
  if [ -z "$CHAPTER_FILE" ]; then
    echo "Error: No chapter file matching '$1' found"
    exit 1
  fi
  CHAPTER_NAME=$(basename "$CHAPTER_FILE" .md)
  OUTPUT="$OUTPUT_DIR/${CHAPTER_NAME}.pdf"
  echo "Building: $CHAPTER_FILE"
  pandoc "$CHAPTER_FILE" $PANDOC_ARGS -o "$OUTPUT"
  echo "Output: $OUTPUT"
else
  # Full guide build
  OUTPUT="$OUTPUT_DIR/private-practice-guide.pdf"

  CHAPTER_FILES=""
  for f in "$CHAPTERS_DIR"/00-introduction.md \
           "$CHAPTERS_DIR"/chapter-1-the-decision.md \
           "$CHAPTERS_DIR"/chapter-2-setting-up.md \
           "$CHAPTERS_DIR"/chapter-3-medicare-cdm.md \
           "$CHAPTERS_DIR"/chapter-4-ndis-basics.md \
           "$CHAPTERS_DIR"/chapter-5-pricing.md \
           "$CHAPTERS_DIR"/chapter-6-finding-clients.md \
           "$CHAPTERS_DIR"/chapter-7-financial-foundations.md \
           "$CHAPTERS_DIR"/chapter-8-common-mistakes.md \
           "$CHAPTERS_DIR"/chapter-9-first-90-days.md \
           "$CHAPTERS_DIR"/appendix-quick-reference.md; do
    if [ -f "$f" ]; then
      CHAPTER_FILES="$CHAPTER_FILES $f"
    else
      echo "Warning: Missing chapter file: $f"
    fi
  done

  echo "Building full guide from $(echo $CHAPTER_FILES | wc -w | tr -d ' ') chapters..."
  pandoc $CHAPTER_FILES $PANDOC_ARGS -o "$OUTPUT"
  echo "Output: $OUTPUT"
fi

echo "Done."
