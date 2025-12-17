# How to Get Real License Plate Images

## What You're Seeing Now

The colored borders with abbreviations are **placeholder images** I created to demonstrate the feature. You need to replace them with actual license plate photographs.

## Best Sources for Real License Plate Photos

### 1. Wikimedia Commons (Best - Free & Legal)

**For US States:**
- Visit: https://commons.wikimedia.org/wiki/Category:License_plates_of_the_United_States_by_state
- Click on a state (e.g., "License plates of California")
- Find a current plate image
- Click the image → Click "More details" 
- Right-click the image → "Save Image As..."
- Save as: `california.svg` (or `.png`, `.jpg` - any image format works)
- Move to: `/Users/jtillett/cursor/License Plate Game/plates/usa/`

**Example Direct Links:**
- California: https://commons.wikimedia.org/wiki/Category:License_plates_of_California
- Texas: https://commons.wikimedia.org/wiki/Category:License_plates_of_Texas
- New York: https://commons.wikimedia.org/wiki/Category:License_plates_of_New_York

### 2. Google Images (Quick but check licensing)

1. Search: `"[State Name] license plate 2024"` or `"[State Name] DMV plate sample"`
2. Look for clean, front-facing images
3. Download and save to the `plates/usa/` folder
4. Name it correctly (see naming rules below)

### 3. State DMV Websites

Many state DMV websites have sample plate images:
- California: https://www.dmv.ca.gov/portal/vehicle-registration/license-plates-decals-and-placards/
- Search for your state's DMV + "license plate"

## File Naming Rules

**CRITICAL:** The filename must match exactly:

| State Name | Filename |
|------------|----------|
| California | `california.svg` (or `.png`, `.jpg`) |
| New York | `new-york.svg` |
| North Carolina | `north-carolina.svg` |
| Washington D.C. | `washington-dc.svg` |

**Rules:**
- All lowercase
- Spaces → hyphens (`-`)
- Remove periods
- Any image format works (`.png`, `.jpg`, `.svg`)

## Quick Start: Download These 5 Popular States

1. **California**: https://commons.wikimedia.org/wiki/File:2019_California_license_plate.png
2. **Texas**: https://commons.wikimedia.org/wiki/File:Texas_license_plate,_2021.png
3. **Florida**: https://commons.wikimedia.org/wiki/File:Florida_2015_license_plate_-_Sunshine_State.jpg
4. **New York**: https://commons.wikimedia.org/wiki/File:New_York_license_plate,_2022.png
5. **Pennsylvania**: https://commons.wikimedia.org/wiki/File:Pennsylvania_license_plate,_2022.png

For each:
1. Click the link
2. Click on the image
3. Right-click → "Save Image As..."
4. Save to: `/Users/jtillett/cursor/License Plate Game/plates/usa/`
5. Name it: `california.svg` (or whatever state, with appropriate extension)

## The JavaScript Will Handle It

Once you replace the files, just refresh the game. The JavaScript automatically:
- ✅ Loads any image format (PNG, JPG, SVG)
- ✅ Scales them appropriately
- ✅ Falls back to text abbreviations if missing

## Tips for Good Images

Look for plates that are:
- ✅ Current/recent designs (2020+)
- ✅ Standard issue (not specialty/vanity plates)
- ✅ Clear, front-facing, well-lit
- ✅ 400-800px wide (good size)
- ❌ Avoid blurry, angled, or damaged plates

## Where to Save Files

All files go in:
```
/Users/jtillett/cursor/License Plate Game/plates/usa/
/Users/jtillett/cursor/License Plate Game/plates/canada/
/Users/jtillett/cursor/License Plate Game/plates/mexico/
```

## Complete Filename List

See `plates/FILENAMES.txt` for the complete list of required filenames.

## Alternative: Keep the Placeholders

The placeholder images actually work fine for the game! They're:
- ✅ Clean and easy to read
- ✅ Color-coded for variety
- ✅ Don't require downloads

If you like them, you can keep them as-is! The game works perfectly either way.

