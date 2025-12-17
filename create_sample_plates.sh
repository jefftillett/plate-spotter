#!/bin/bash
# Creates simple SVG license plate images as placeholders
# You can replace these with real photos later

cd "$(dirname "$0")/plates/usa"

create_plate() {
    local state="$1"
    local abbr="$2"
    local color="${3:-#4A90E2}"
    
    cat > "${state}.png.svg" << EOF
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="300" fill="${color}" rx="15"/>
  <rect x="10" y="10" width="580" height="280" fill="white" stroke="#333" stroke-width="3" rx="10"/>
  <text x="300" y="100" font-family="Arial, sans-serif" font-size="80" font-weight="bold" text-anchor="middle" fill="#333">${abbr}</text>
  <text x="300" y="200" font-family="Arial, sans-serif" font-size="40" text-anchor="middle" fill="#666">${state}</text>
  <rect x="50" y="240" width="100" height="40" fill="#E8E8E8" rx="5"/>
  <rect x="450" y="240" width="100" height="40" fill="#E8E8E8" rx="5"/>
</svg>
EOF
    
    # Convert SVG to PNG if possible (requires rsvg-convert or imagemagick)
    if command -v rsvg-convert &> /dev/null; then
        rsvg-convert "${state}.png.svg" -o "${state}.png" -w 600 -h 300
        rm "${state}.png.svg"
        echo "✓ Created ${state}.png"
    elif command -v convert &> /dev/null; then
        convert "${state}.png.svg" -resize 600x300 "${state}.png"
        rm "${state}.png.svg"
        echo "✓ Created ${state}.png (ImageMagick)"
    else
        mv "${state}.png.svg" "${state}.png"
        echo "✓ Created ${state}.png (as SVG - will work in browser)"
    fi
}

# Create plates for the most common states
create_plate "california" "CA" "#4A90E2"
create_plate "texas" "TX" "#E24A4A"  
create_plate "florida" "FL" "#E2A94A"
create_plate "new-york" "NY" "#4AE290"
create_plate "pennsylvania" "PA" "#904AE2"
create_plate "illinois" "IL" "#E24A90"
create_plate "ohio" "OH" "#4AE2E2"
create_plate "georgia" "GA" "#E2E24A"
create_plate "north-carolina" "NC" "#90E24A"
create_plate "michigan" "MI" "#E2904A"

echo ""
echo "Created 10 sample license plates!"
echo "These are placeholders - you can replace them with real photos."

