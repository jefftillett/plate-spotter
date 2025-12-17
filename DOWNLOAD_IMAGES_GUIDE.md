# How to Download License Plate Images

Due to SSL certificate configuration on your system, automated downloading isn't working. Here are several easy ways to get the images:

## Option 1: Download Manually from Wikimedia Commons (Recommended)

This is the easiest and most reliable method:

### For USA Plates:
1. Visit: https://commons.wikimedia.org/wiki/Category:License_plates_of_the_United_States_by_state
2. Click on any state category (e.g., "License plates of California")
3. Find a clear, current license plate image
4. Click the image → Click "More details" → Right-click and "Save Image As..."
5. Save with the correct filename in `plates/usa/` folder
   - Example: Save as `california.png`

### For Canadian Plates:
1. Visit: https://commons.wikimedia.org/wiki/Category:License_plates_of_Canada_by_province
2. Follow the same process as above
3. Save in `plates/canada/` folder

### For Mexican Plates:
1. Visit: https://commons.wikimedia.org/wiki/Category:License_plates_of_Mexico_by_state
2. Follow the same process as above
3. Save in `plates/mexico/` folder

## Option 2: Use the Fixed Download Script

I've created an updated script that bypasses SSL verification. Run this:

```bash
cd "/Users/jtillett/cursor/License Plate Game"
python3 download_plates_no_ssl.py
```

**Warning**: This script disables SSL certificate verification. Only use it for downloading from trusted sources like Wikimedia Commons.

## Option 3: Download a Starter Pack

I can provide you with direct URLs to download a few popular states to get started:

### Quick Start - Top 10 Most Common States:

Run these commands one by one:

```bash
cd "/Users/jtillett/cursor/License Plate Game/plates/usa"

# California
curl -k -L -o california.png "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/2019_California_license_plate.png/600px-2019_California_license_plate.png"

# Texas  
curl -k -L -o texas.png "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Texas_license_plate%2C_2021.png/600px-Texas_license_plate%2C_2021.png"

# Florida
curl -k -L -o florida.png "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Florida_2015_license_plate_-_Sunshine_State.jpg/600px-Florida_2015_license_plate_-_Sunshine_State.jpg"

# New York
curl -k -L -o new-york.png "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/New_York_license_plate%2C_2022.png/600px-New_York_license_plate%2C_2022.png"

# Pennsylvania
curl -k -L -o pennsylvania.png "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pennsylvania_license_plate%2C_2022.png/600px-Pennsylvania_license_plate%2C_2022.png"
```

## Tips for Finding Good Images:

1. **Look for "current" or recent year plates** (2020+)
2. **Choose clear, front-facing images** without glare or damage
3. **Avoid specialty or vanity plates** - stick to standard designs
4. **Prefer PNG format** when available (better quality)
5. **Images around 400-600px wide** work best

## Batch Download Alternative

If you want to fix your SSL certificates:

1. Open Terminal
2. Run: `/Applications/Python\ 3.*/Install\ Certificates.command`
   (Replace * with your Python version, e.g., 3.11)
3. Then run the original `download_plates.py` script

## File Naming Reminder:

- All lowercase
- Spaces become hyphens: "New York" → `new-york.png`
- Remove periods: "Washington D.C." → `washington-dc.png`
- See `plates/FILENAMES.txt` for the complete list

## The Game Works Without Images!

Remember: The game will automatically fall back to styled abbreviations if images aren't available. You can add images gradually as you find good ones. Even having just a few states with images makes the game more engaging!

## Quick Test

After downloading any image, refresh your browser and check if it appears on the license plate card. If you see the image instead of just the abbreviation, it's working!

