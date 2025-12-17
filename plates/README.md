# License Plate Images

This folder contains license plate images for the game. The app will automatically display real license plate images when available, and fall back to styled text abbreviations when images are missing.

## Directory Structure

```
plates/
├── usa/
│   ├── alabama.png
│   ├── alaska.png
│   ├── arizona.png
│   └── ...
├── canada/
│   ├── alberta.png
│   ├── british-columbia.png
│   └── ...
└── mexico/
    ├── aguascalientes.png
    ├── baja-california.png
    └── ...
```

## File Naming Convention

- All filenames should be lowercase
- Replace spaces with hyphens (-)
- Remove periods
- Use `.png` format (recommended for best quality)

### Examples:
- "New York" → `new-york.png`
- "Washington D.C." → `washington-dc.png`
- "British Columbia" → `british-columbia.png`
- "San Luis Potosí" → `san-luis-potosi.png`

## Where to Get License Plate Images

### Free Sources:
1. **Wikimedia Commons**: Search for "[State/Province] license plate" - many high-quality images available under free licenses
2. **Government Websites**: Many DMV/transport department websites have sample plate images
3. **Create Your Own**: Use design tools to create simplified versions

### Recommended Image Specs:
- Format: PNG (supports transparency)
- Recommended width: 300-600px
- Aspect ratio: Approximately 2:1 (standard plate proportions)
- Background: Transparent or white

## Quick Start

1. Download or create license plate images
2. Name them according to the convention above
3. Place them in the appropriate country folder
4. The game will automatically load them!

If an image is missing or fails to load, the game will show the styled state abbreviation as a fallback.

## Example Downloads

For USA plates, you can search Wikimedia Commons:
- https://commons.wikimedia.org/wiki/Category:License_plates_of_the_United_States_by_state

For Canadian plates:
- https://commons.wikimedia.org/wiki/Category:License_plates_of_Canada_by_province

For Mexican plates:
- https://commons.wikimedia.org/wiki/Category:License_plates_of_Mexico

