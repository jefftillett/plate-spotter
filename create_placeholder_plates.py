#!/usr/bin/env python3
"""
Creates simple placeholder license plate images
These work perfectly to demonstrate the feature until you get real photos
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_plate(state_name, abbr, output_path, bg_color=(70, 130, 180)):
    """Create a simple license plate image"""
    # Create image
    width, height = 600, 300
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw white background plate
    draw.rectangle([20, 20, width-20, height-20], fill='white', outline='#333333', width=4)
    
    # Try to use a system font, fall back to default
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 100)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 40)
    except:
        try:
            font_large = ImageFont.truetype("/Library/Fonts/Arial.ttf", 100)
            font_small = ImageFont.truetype("/Library/Fonts/Arial.ttf", 40)
        except:
            font_large = ImageFont.load_default()
            font_small = ImageFont.load_default()
    
    # Draw abbreviation (large)
    bbox = draw.textbbox((0, 0), abbr, font=font_large)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = 70
    draw.text((x, y), abbr, fill='#333333', font=font_large)
    
    # Draw state name (small)
    bbox_small = draw.textbbox((0, 0), state_name.upper(), font=font_small)
    text_width_small = bbox_small[2] - bbox_small[0]
    x_small = (width - text_width_small) // 2
    y_small = 200
    draw.text((x_small, y_small), state_name.upper(), fill='#666666', font=font_small)
    
    # Draw mounting holes
    draw.ellipse([50, 250, 90, 270], fill='#CCCCCC')
    draw.ellipse([width-90, 250, width-50, 270], fill='#CCCCCC')
    
    # Save
    img.save(output_path, 'PNG')
    print(f"✓ Created {os.path.basename(output_path)}")

def main():
    base_dir = "plates/usa"
    os.makedirs(base_dir, exist_ok=True)
    
    # Different colors for variety
    colors = [
        (70, 130, 180),   # Steel blue
        (220, 20, 60),     # Crimson
        (255, 165, 0),     # Orange
        (50, 205, 50),     # Lime green
        (138, 43, 226),    # Blue violet
        (255, 20, 147),    # Deep pink
        (0, 206, 209),     # Dark turquoise
        (255, 215, 0),     # Gold
        (154, 205, 50),    # Yellow green
        (255, 140, 0),     # Dark orange
    ]
    
    states = [
        ("California", "CA"),
        ("Texas", "TX"),
        ("Florida", "FL"),
        ("New York", "NY"),
        ("Pennsylvania", "PA"),
        ("Illinois", "IL"),
        ("Ohio", "OH"),
        ("Georgia", "GA"),
        ("North Carolina", "NC"),
        ("Michigan", "MI"),
        ("Washington", "WA"),
        ("Arizona", "AZ"),
        ("Massachusetts", "MA"),
        ("Tennessee", "TN"),
        ("Indiana", "IN"),
        ("Missouri", "MO"),
        ("Maryland", "MD"),
        ("Wisconsin", "WI"),
        ("Colorado", "CO"),
        ("Minnesota", "MN"),
        ("Virginia", "VA"),
    ]
    
    print("Creating placeholder license plate images...\n")
    
    for i, (state, abbr) in enumerate(states):
        filename = state.lower().replace(' ', '-') + '.png'
        filepath = os.path.join(base_dir, filename)
        color = colors[i % len(colors)]
        create_plate(state, abbr, filepath, color)
    
    print(f"\n✓ Created {len(states)} placeholder plates!")
    print("\nThese are simple placeholder images to demonstrate the feature.")
    print("You can replace them with real license plate photos anytime.")
    print("\nTo get real photos:")
    print("1. Search Google Images for '[State] license plate'")
    print("2. Download and save with the same filename")
    print("3. Or follow the guide in DOWNLOAD_IMAGES_GUIDE.md")

if __name__ == "__main__":
    try:
        main()
    except ImportError:
        print("Error: PIL/Pillow is not installed.")
        print("\nTo install: pip3 install Pillow")
        print("\nOr create simple text files as shown in the guide.")

