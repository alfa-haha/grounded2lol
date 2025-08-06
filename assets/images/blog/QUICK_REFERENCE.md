# 🚀 Quick Reference: Blog Images

## 📋 Current Blog Articles & Required Images

### 1. Grounded 2 Beginner Guide
**Slug**: `grounded-2-beginner-guide`

#### Required Images:
```
📁 covers/
├── grounded-2-beginner-guide-cover.webp (1200x600px)
└── grounded-2-beginner-guide-cover.jpg (1200x600px)

📁 thumbnails/
├── grounded-2-beginner-guide-thumb.webp (400x300px)
└── grounded-2-beginner-guide-thumb.jpg (400x300px)

📁 content/ (optional)
├── grounded-2-beginner-guide-omni-tool.webp
├── grounded-2-beginner-guide-base-building.webp
├── grounded-2-beginner-guide-ant-buggy.webp
└── grounded-2-beginner-guide-analyzer.webp
```

### 2. Hidden Grounded 2 Secrets
**Slug**: `hidden-grounded-2-secrets`

#### Required Images:
```
📁 covers/
├── hidden-grounded-2-secrets-cover.webp (1200x600px)
└── hidden-grounded-2-secrets-cover.jpg (1200x600px)

📁 thumbnails/
├── hidden-grounded-2-secrets-thumb.webp (400x300px)
└── hidden-grounded-2-secrets-thumb.jpg (400x300px)

📁 content/ (optional)
├── hidden-grounded-2-secrets-stealth-trick.webp
├── hidden-grounded-2-secrets-resource-hack.webp
├── hidden-grounded-2-secrets-combat-tips.webp
└── hidden-grounded-2-secrets-hidden-locations.webp
```

### 3. Dual-Wielding Weapons Guide
**Slug**: `grounded-2-dual-wielding-weapons`

#### Required Images:
```
📁 covers/
├── grounded-2-dual-wielding-weapons-cover.webp (1200x600px)
└── grounded-2-dual-wielding-weapons-cover.jpg (1200x600px)

📁 thumbnails/
├── grounded-2-dual-wielding-weapons-thumb.webp (400x300px)
└── grounded-2-dual-wielding-weapons-thumb.jpg (400x300px)

📁 content/ (optional)
├── grounded-2-dual-wielding-weapons-ice-sickles.webp
├── grounded-2-dual-wielding-weapons-northern-shredders.webp
├── grounded-2-dual-wielding-weapons-cold-gear.webp
└── grounded-2-dual-wielding-weapons-ice-cart.webp
```

## 🎨 Category Icons
```
📁 icons/
├── beginner-icon.svg (64x64px)
├── advanced-icon.svg (64x64px)
├── weapons-icon.svg (64x64px)
├── combat-icon.svg (64x64px)
├── crafting-icon.svg (64x64px)
└── survival-icon.svg (64x64px)
```

## 🔗 HTML Implementation

### Cover Image
```html
<picture>
    <source srcset="/assets/images/blog/covers/{slug}-cover.webp" type="image/webp">
    <img src="/assets/images/blog/covers/{slug}-cover.jpg" alt="{title}" class="blog-cover">
</picture>
```

### Thumbnail Image
```html
<picture>
    <source srcset="/assets/images/blog/thumbnails/{slug}-thumb.webp" type="image/webp">
    <img src="/assets/images/blog/thumbnails/{slug}-thumb.jpg" alt="{title}" class="blog-thumbnail">
</picture>
```

### Content Image
```html
<picture>
    <source srcset="/assets/images/blog/content/{slug}-{description}.webp" type="image/webp">
    <img src="/assets/images/blog/content/{slug}-{description}.jpg" alt="{description}" class="blog-content-image">
</picture>
```

## 📐 Image Specifications Summary

| Type | Dimensions | Format | Max Size | Usage |
|------|------------|--------|----------|-------|
| Cover | 1200x600px | WebP/JPG | 200KB/300KB | Hero sections |
| Thumbnail | 400x300px | WebP/JPG | 50KB/80KB | Blog cards |
| Content | Variable (max 800px) | WebP/JPG/PNG | 150KB | Article content |
| Icons | 64x64px | SVG/PNG | 10KB | UI elements |

## 🛠️ Tools for Image Optimization

### Recommended Tools:
- **TinyPNG**: Online compression
- **ImageOptim**: Mac app for optimization
- **Squoosh**: Google's web-based image optimizer
- **GIMP/Photoshop**: For resizing and editing

### Batch Processing:
```bash
# Example using ImageMagick for batch resizing
magick mogrify -resize 1200x600^ -gravity center -extent 1200x600 *.jpg
```

## 🚀 Quick Setup Checklist

- [ ] Create cover images (1200x600px) in WebP and JPG
- [ ] Create thumbnail images (400x300px) in WebP and JPG  
- [ ] Add category icons in SVG format
- [ ] Include blog-images.css in your main stylesheet
- [ ] Include blog-images.js in your page scripts
- [ ] Test images on different devices and browsers
- [ ] Verify WebP fallback works correctly
- [ ] Check lazy loading functionality

## 📱 Testing Checklist

- [ ] Images display correctly on desktop
- [ ] Images display correctly on mobile
- [ ] WebP images load in supported browsers
- [ ] JPG fallbacks work in older browsers
- [ ] Lazy loading works properly
- [ ] Image gallery lightbox functions
- [ ] Alt text is descriptive and accessible
- [ ] Images are properly compressed