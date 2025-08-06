# Blog Images Structure & Guidelines

## 📁 File Structure

```
assets/
└── images/
    └── blog/
        ├── covers/           # Cover images for blog detail pages
        ├── thumbnails/       # Thumbnail images for blog listing
        ├── content/          # Images used within blog content
        └── icons/            # Category icons and small graphics
```

## 🖼️ Image Specifications

### Cover Images (`/assets/images/blog/covers/`)
- **Purpose**: Hero images for blog detail pages
- **Format**: WebP (primary), JPG (fallback)
- **Dimensions**: 1200x600px (2:1 aspect ratio)
- **File Size**: < 200KB (WebP), < 300KB (JPG)
- **Naming Convention**: `{blog-slug}-cover.webp` / `{blog-slug}-cover.jpg`

**Examples:**
- `grounded-2-beginner-guide-cover.webp`
- `hidden-grounded-2-secrets-cover.webp`
- `grounded-2-dual-wielding-weapons-cover.webp`

### Thumbnail Images (`/assets/images/blog/thumbnails/`)
- **Purpose**: Preview images for blog cards and listings
- **Format**: WebP (primary), JPG (fallback)
- **Dimensions**: 400x300px (4:3 aspect ratio)
- **File Size**: < 50KB (WebP), < 80KB (JPG)
- **Naming Convention**: `{blog-slug}-thumb.webp` / `{blog-slug}-thumb.jpg`

**Examples:**
- `grounded-2-beginner-guide-thumb.webp`
- `hidden-grounded-2-secrets-thumb.webp`
- `grounded-2-dual-wielding-weapons-thumb.webp`

### Content Images (`/assets/images/blog/content/`)
- **Purpose**: Images used within blog article content
- **Format**: WebP (primary), JPG/PNG (fallback)
- **Dimensions**: Variable (max width 800px for inline images)
- **File Size**: < 150KB per image
- **Naming Convention**: `{blog-slug}-{description}.webp`

**Examples:**
- `grounded-2-beginner-guide-omni-tool.webp`
- `hidden-grounded-2-secrets-ant-buggy.webp`
- `grounded-2-dual-wielding-weapons-ice-sickles.webp`

### Category Icons (`/assets/images/blog/icons/`)
- **Purpose**: Small icons for categories and UI elements
- **Format**: SVG (primary), PNG (fallback)
- **Dimensions**: 64x64px (PNG), scalable (SVG)
- **File Size**: < 10KB
- **Naming Convention**: `{category-name}-icon.svg`

**Examples:**
- `beginner-icon.svg`
- `advanced-icon.svg`
- `weapons-icon.svg`

## 🎨 Design Guidelines

### Color Palette
- Primary Green: #4CAF50
- Accent Orange: #FF6B35
- Dark Green: #2E7D32
- Ice Blue: #00BCD4
- Purple Mystery: #9C27B0

### Visual Style
- **Grounded 2 themed**: Include game elements, characters, or environments
- **High contrast**: Ensure text readability when overlaid
- **Consistent branding**: Use game's visual language and color scheme
- **Professional quality**: Sharp, well-composed images

## 📝 Implementation Notes

### HTML Usage
```html
<!-- Cover Image -->
<picture>
  <source srcset="/assets/images/blog/covers/blog-slug-cover.webp" type="image/webp">
  <img src="/assets/images/blog/covers/blog-slug-cover.jpg" alt="Article Title" class="blog-cover">
</picture>

<!-- Thumbnail Image -->
<picture>
  <source srcset="/assets/images/blog/thumbnails/blog-slug-thumb.webp" type="image/webp">
  <img src="/assets/images/blog/thumbnails/blog-slug-thumb.jpg" alt="Article Title" class="blog-thumbnail">
</picture>
```

### CSS Classes
- `.blog-cover`: Cover image styling
- `.blog-thumbnail`: Thumbnail image styling
- `.blog-content-image`: Inline content images
- `.blog-icon`: Category and UI icons

## 🚀 Optimization Tips

1. **Use WebP format** for better compression and quality
2. **Provide JPG fallbacks** for older browser support
3. **Compress images** using tools like TinyPNG or ImageOptim
4. **Use lazy loading** for better page performance
5. **Add proper alt text** for accessibility and SEO

## 📋 Current Blog Articles

### 1. Grounded 2 Beginner Guide
- **Slug**: `grounded-2-beginner-guide`
- **Category**: Beginner
- **Theme**: Green/Nature (survival basics)
- **Suggested imagery**: Omni tools, base building, ant buggies

### 2. Hidden Grounded 2 Secrets
- **Slug**: `hidden-grounded-2-secrets`
- **Category**: Advanced
- **Theme**: Purple/Mystery (hidden secrets)
- **Suggested imagery**: Hidden locations, advanced techniques, secret items

### 3. Dual-Wielding Weapons Guide
- **Slug**: `grounded-2-dual-wielding-weapons`
- **Category**: Weapons
- **Theme**: Ice Blue/Combat (weapons focus)
- **Suggested imagery**: Ice Sickles, Northern Shredders, combat scenes

## 🔄 Future Expansion

When adding new blog articles:
1. Create images following the naming convention
2. Update this README with new article information
3. Add appropriate CSS classes if needed
4. Test images across different devices and browsers