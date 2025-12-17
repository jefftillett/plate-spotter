# Troubleshooting: License Plate Images Not Showing

If you're not seeing the license plate images, follow these steps:

## Step 1: Check You're Using the Web Server

**❌ WRONG:** Opening `file:///Users/jtillett/cursor/License Plate Game/index.html` directly

**✅ CORRECT:** Opening `http://localhost:8080` or `http://localhost:8080/index.html`

The browser blocks loading local images when using the `file://` protocol for security reasons.

### To Start the Web Server:

```bash
cd "/Users/jtillett/cursor/License Plate Game"
python3 -m http.server 8080
```

Then open: **http://localhost:8080** in your browser

## Step 2: Test Images are Loading

1. Open: **http://localhost:8080/test-images.html**
2. You should see 21 license plate images
3. Each should show "✓ Loaded" in green
4. If you see "✗ Failed to load", the images aren't accessible

## Step 3: Check Browser Console

1. Open your browser's Developer Tools (F12 or Cmd+Option+I)
2. Go to the **Console** tab
3. Look for messages like:
   - `✓ Image loaded: plates/usa/california.png` (Good!)
   - `✗ Image failed: plates/usa/california.png` (Problem!)
4. If you see errors, take a screenshot and share

## Step 4: Hard Refresh

Even after clearing cache, you may need to do a **hard refresh**:

- **Chrome/Edge**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)
- **Firefox**: Cmd+Shift+R (Mac) or Ctrl+F5 (Windows/Linux)
- **Safari**: Cmd+Option+R

## Step 5: Verify Files Exist

Run this command to confirm images were downloaded:

```bash
ls -l "/Users/jtillett/cursor/License Plate Game/plates/usa/"
```

You should see 21 `.png` files.

## Step 6: Check Service Worker

The service worker might be caching old files:

1. Open Developer Tools (F12)
2. Go to **Application** tab
3. Click **Service Workers** in the left sidebar
4. Click **Unregister** next to any service workers
5. Refresh the page

## Common Issues:

### "All plates show abbreviations, no images"
- **Cause**: Not using web server (using `file://` protocol)
- **Fix**: Access via `http://localhost:8080`

### "Some plates show images, some don't"
- **Cause**: Those images weren't downloaded
- **Fix**: Normal! Only 21 states have images currently

### "Test page shows images, main game doesn't"
- **Cause**: Service worker cache issue
- **Fix**: Unregister service worker (see Step 6 above)

### "Console shows 404 errors"
- **Cause**: Path mismatch or files in wrong location
- **Fix**: Verify files are in `plates/usa/` folder with correct names

## Still Not Working?

Share the following info:

1. What URL are you accessing? (file:// or http://localhost:8080?)
2. What do you see in the browser console? (any errors?)
3. Does the test page work? (http://localhost:8080/test-images.html)
4. Output of: `ls "/Users/jtillett/cursor/License Plate Game/plates/usa/" | wc -l`

