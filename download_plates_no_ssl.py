#!/usr/bin/env python3
"""
Script to download license plate images from Wikimedia Commons
Note: This version disables SSL verification - use only for trusted sources
"""

import urllib.request
import urllib.parse
import json
import time
import os
import ssl

# Create an SSL context that doesn't verify certificates
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

# Wikimedia Commons API base URL
COMMONS_API = "https://commons.wikimedia.org/w/api.php"

def search_wikimedia_image(search_term):
    """Search for an image on Wikimedia Commons and return the direct image URL"""
    try:
        # Search for files
        params = {
            'action': 'query',
            'format': 'json',
            'list': 'search',
            'srsearch': search_term,
            'srnamespace': 6,  # File namespace
            'srlimit': 1
        }
        
        url = f"{COMMONS_API}?{urllib.parse.urlencode(params)}"
        request = urllib.request.Request(url)
        with urllib.request.urlopen(request, timeout=10, context=ssl_context) as response:
            data = json.loads(response.read().decode())
            
        if not data.get('query', {}).get('search'):
            return None
            
        # Get the first result
        title = data['query']['search'][0]['title']
        
        # Get image info
        params = {
            'action': 'query',
            'format': 'json',
            'titles': title,
            'prop': 'imageinfo',
            'iiprop': 'url',
            'iiurlwidth': 600
        }
        
        url = f"{COMMONS_API}?{urllib.parse.urlencode(params)}"
        request = urllib.request.Request(url)
        with urllib.request.urlopen(request, timeout=10, context=ssl_context) as response:
            data = json.loads(response.read().decode())
            
        pages = data.get('query', {}).get('pages', {})
        for page in pages.values():
            if 'imageinfo' in page:
                return page['imageinfo'][0].get('thumburl') or page['imageinfo'][0].get('url')
                
        return None
    except Exception as e:
        print(f"  Error searching for {search_term}: {e}")
        return None

def download_image(url, filepath):
    """Download an image from URL to filepath"""
    try:
        request = urllib.request.Request(url)
        with urllib.request.urlopen(request, timeout=30, context=ssl_context) as response:
            data = response.read()
            
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'wb') as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"  Error downloading to {filepath}: {e}")
        return False

# License plate data
usa_plates = [
    ("Alabama", "alabama.png", "Alabama license plate"),
    ("Alaska", "alaska.png", "Alaska license plate"),
    ("Arizona", "arizona.png", "Arizona license plate"),
    ("Arkansas", "arkansas.png", "Arkansas license plate"),
    ("California", "california.png", "California license plate"),
    ("Colorado", "colorado.png", "Colorado license plate"),
    ("Connecticut", "connecticut.png", "Connecticut license plate"),
    ("Delaware", "delaware.png", "Delaware license plate"),
    ("Florida", "florida.png", "Florida license plate"),
    ("Georgia", "georgia.png", "Georgia license plate USA"),
    ("Hawaii", "hawaii.png", "Hawaii license plate"),
    ("Idaho", "idaho.png", "Idaho license plate"),
    ("Illinois", "illinois.png", "Illinois license plate"),
    ("Indiana", "indiana.png", "Indiana license plate"),
    ("Iowa", "iowa.png", "Iowa license plate"),
    ("Kansas", "kansas.png", "Kansas license plate"),
    ("Kentucky", "kentucky.png", "Kentucky license plate"),
    ("Louisiana", "louisiana.png", "Louisiana license plate"),
    ("Maine", "maine.png", "Maine license plate"),
    ("Maryland", "maryland.png", "Maryland license plate"),
    ("Massachusetts", "massachusetts.png", "Massachusetts license plate"),
    ("Michigan", "michigan.png", "Michigan license plate"),
    ("Minnesota", "minnesota.png", "Minnesota license plate"),
    ("Mississippi", "mississippi.png", "Mississippi license plate"),
    ("Missouri", "missouri.png", "Missouri license plate"),
    ("Montana", "montana.png", "Montana license plate"),
    ("Nebraska", "nebraska.png", "Nebraska license plate"),
    ("Nevada", "nevada.png", "Nevada license plate"),
    ("New Hampshire", "new-hampshire.png", "New Hampshire license plate"),
    ("New Jersey", "new-jersey.png", "New Jersey license plate"),
    ("New Mexico", "new-mexico.png", "New Mexico license plate"),
    ("New York", "new-york.png", "New York license plate"),
    ("North Carolina", "north-carolina.png", "North Carolina license plate"),
    ("North Dakota", "north-dakota.png", "North Dakota license plate"),
    ("Ohio", "ohio.png", "Ohio license plate"),
    ("Oklahoma", "oklahoma.png", "Oklahoma license plate"),
    ("Oregon", "oregon.png", "Oregon license plate"),
    ("Pennsylvania", "pennsylvania.png", "Pennsylvania license plate"),
    ("Rhode Island", "rhode-island.png", "Rhode Island license plate"),
    ("South Carolina", "south-carolina.png", "South Carolina license plate"),
    ("South Dakota", "south-dakota.png", "South Dakota license plate"),
    ("Tennessee", "tennessee.png", "Tennessee license plate"),
    ("Texas", "texas.png", "Texas license plate"),
    ("Utah", "utah.png", "Utah license plate"),
    ("Vermont", "vermont.png", "Vermont license plate"),
    ("Virginia", "virginia.png", "Virginia license plate"),
    ("Washington", "washington.png", "Washington state license plate"),
    ("West Virginia", "west-virginia.png", "West Virginia license plate"),
    ("Wisconsin", "wisconsin.png", "Wisconsin license plate"),
    ("Wyoming", "wyoming.png", "Wyoming license plate"),
    ("Washington D.C.", "washington-dc.png", "District of Columbia license plate"),
]

canada_plates = [
    ("Alberta", "alberta.png", "Alberta license plate"),
    ("British Columbia", "british-columbia.png", "British Columbia license plate"),
    ("Manitoba", "manitoba.png", "Manitoba license plate"),
    ("New Brunswick", "new-brunswick.png", "New Brunswick license plate"),
    ("Newfoundland and Labrador", "newfoundland-and-labrador.png", "Newfoundland Labrador license plate"),
    ("Northwest Territories", "northwest-territories.png", "Northwest Territories license plate"),
    ("Nova Scotia", "nova-scotia.png", "Nova Scotia license plate"),
    ("Nunavut", "nunavut.png", "Nunavut license plate"),
    ("Ontario", "ontario.png", "Ontario license plate"),
    ("Prince Edward Island", "prince-edward-island.png", "Prince Edward Island license plate"),
    ("Quebec", "quebec.png", "Quebec license plate"),
    ("Saskatchewan", "saskatchewan.png", "Saskatchewan license plate"),
    ("Yukon", "yukon.png", "Yukon license plate"),
]

mexico_plates = [
    ("Aguascalientes", "aguascalientes.png", "Aguascalientes Mexico license plate"),
    ("Baja California", "baja-california.png", "Baja California Mexico license plate"),
    ("Baja California Sur", "baja-california-sur.png", "Baja California Sur Mexico license plate"),
    ("Campeche", "campeche.png", "Campeche Mexico license plate"),
    ("Chiapas", "chiapas.png", "Chiapas Mexico license plate"),
    ("Chihuahua", "chihuahua.png", "Chihuahua Mexico license plate"),
    ("Coahuila", "coahuila.png", "Coahuila Mexico license plate"),
    ("Colima", "colima.png", "Colima Mexico license plate"),
    ("Durango", "durango.png", "Durango Mexico license plate"),
    ("Guanajuato", "guanajuato.png", "Guanajuato Mexico license plate"),
    ("Guerrero", "guerrero.png", "Guerrero Mexico license plate"),
    ("Hidalgo", "hidalgo.png", "Hidalgo Mexico license plate"),
    ("Jalisco", "jalisco.png", "Jalisco Mexico license plate"),
    ("Mexico State", "mexico.png", "Estado de Mexico license plate"),
    ("Michoacán", "michoacan.png", "Michoacan Mexico license plate"),
    ("Morelos", "morelos.png", "Morelos Mexico license plate"),
    ("Nayarit", "nayarit.png", "Nayarit Mexico license plate"),
    ("Nuevo León", "nuevo-leon.png", "Nuevo Leon Mexico license plate"),
    ("Oaxaca", "oaxaca.png", "Oaxaca Mexico license plate"),
    ("Puebla", "puebla.png", "Puebla Mexico license plate"),
    ("Querétaro", "queretaro.png", "Queretaro Mexico license plate"),
    ("Quintana Roo", "quintana-roo.png", "Quintana Roo Mexico license plate"),
    ("San Luis Potosí", "san-luis-potosi.png", "San Luis Potosi Mexico license plate"),
    ("Sinaloa", "sinaloa.png", "Sinaloa Mexico license plate"),
    ("Sonora", "sonora.png", "Sonora Mexico license plate"),
    ("Tabasco", "tabasco.png", "Tabasco Mexico license plate"),
    ("Tamaulipas", "tamaulipas.png", "Tamaulipas Mexico license plate"),
    ("Tlaxcala", "tlaxcala.png", "Tlaxcala Mexico license plate"),
    ("Veracruz", "veracruz.png", "Veracruz Mexico license plate"),
    ("Yucatán", "yucatan.png", "Yucatan Mexico license plate"),
    ("Zacatecas", "zacatecas.png", "Zacatecas Mexico license plate"),
    ("Mexico City", "mexico-city.png", "Mexico City CDMX license plate"),
]

def download_all_plates():
    """Download all license plates"""
    base_dir = "plates"
    
    all_plates = [
        ("usa", usa_plates),
        ("canada", canada_plates),
        ("mexico", mexico_plates)
    ]
    
    total = sum(len(plates) for _, plates in all_plates)
    current = 0
    success_count = 0
    
    print(f"Downloading {total} license plate images...")
    print("Note: SSL certificate verification is disabled for this download.")
    print()
    
    for country, plates in all_plates:
        print(f"\n{'='*60}")
        print(f"Downloading {country.upper()} plates ({len(plates)} total)")
        print(f"{'='*60}\n")
        
        for name, filename, search_term in plates:
            current += 1
            print(f"[{current}/{total}] {name}...", end=" ")
            
            filepath = os.path.join(base_dir, country, filename)
            
            # Skip if already exists
            if os.path.exists(filepath):
                print("✓ Already exists")
                success_count += 1
                continue
            
            # Search for image
            image_url = search_wikimedia_image(search_term)
            
            if not image_url:
                print("✗ Not found")
                continue
            
            # Download image
            if download_image(image_url, filepath):
                print("✓ Downloaded")
                success_count += 1
            else:
                print("✗ Failed")
            
            # Be nice to Wikimedia's servers
            time.sleep(0.5)
    
    print(f"\n{'='*60}")
    print(f"Download complete!")
    print(f"Successfully downloaded/found: {success_count}/{total} images")
    print(f"{'='*60}")

if __name__ == "__main__":
    print("WARNING: This script disables SSL certificate verification.")
    print("Only use for downloading from trusted sources like Wikimedia Commons.\n")
    input("Press Enter to continue or Ctrl+C to cancel...")
    download_all_plates()

