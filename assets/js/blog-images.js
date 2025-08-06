// Blog Images JavaScript Handler

class BlogImageManager {
    constructor() {
        this.init();
    }

    init() {
        this.detectWebPSupport();
        this.setupLazyLoading();
        this.setupImageGallery();
        this.setupImageOptimization();
    }

    // Detect WebP support
    detectWebPSupport() {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
            if (webP.height === 2) {
                document.documentElement.classList.add('webp');
            } else {
                document.documentElement.classList.add('no-webp');
                this.fallbackToJPG();
            }
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }

    // Fallback to JPG for browsers without WebP support
    fallbackToJPG() {
        const webpImages = document.querySelectorAll('img[data-webp]');
        webpImages.forEach(img => {
            const fallbackSrc = img.getAttribute('data-fallback');
            if (fallbackSrc) {
                img.src = fallbackSrc;
            }
        });
    }

    // Setup lazy loading for images
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        observer.unobserve(img);
                    }
                });
            });

            const lazyImages = document.querySelectorAll('.blog-image-lazy');
            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            this.loadAllImages();
        }
    }

    // Load individual image
    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
            img.classList.add('loaded');
            img.classList.remove('blog-image-loading');
        }
    }

    // Load all images (fallback)
    loadAllImages() {
        const lazyImages = document.querySelectorAll('.blog-image-lazy');
        lazyImages.forEach(img => this.loadImage(img));
    }

    // Setup image gallery functionality
    setupImageGallery() {
        const galleryImages = document.querySelectorAll('.blog-image-gallery .blog-content-image');
        
        galleryImages.forEach(img => {
            img.addEventListener('click', (e) => {
                this.openLightbox(e.target);
            });
        });
    }

    // Open image in lightbox
    openLightbox(img) {
        const lightbox = document.createElement('div');
        lightbox.className = 'blog-image-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-overlay">
                <div class="lightbox-container">
                    <img src="${img.src}" alt="${img.alt}" class="lightbox-image">
                    <button class="lightbox-close">&times;</button>
                </div>
            </div>
        `;

        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        // Close lightbox events
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const overlay = lightbox.querySelector('.lightbox-overlay');

        closeBtn.addEventListener('click', () => this.closeLightbox(lightbox));
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeLightbox(lightbox);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLightbox(lightbox);
            }
        });
    }

    // Close lightbox
    closeLightbox(lightbox) {
        document.body.style.overflow = '';
        lightbox.remove();
    }

    // Setup image optimization
    setupImageOptimization() {
        // Add loading states
        const images = document.querySelectorAll('.blog-cover, .blog-thumbnail, .blog-content-image');
        
        images.forEach(img => {
            if (!img.complete) {
                img.classList.add('blog-image-loading');
                
                img.addEventListener('load', () => {
                    img.classList.remove('blog-image-loading');
                });

                img.addEventListener('error', () => {
                    img.classList.remove('blog-image-loading');
                    this.handleImageError(img);
                });
            }
        });
    }

    // Handle image loading errors
    handleImageError(img) {
        // Try fallback image if available
        const fallback = img.getAttribute('data-fallback');
        if (fallback && img.src !== fallback) {
            img.src = fallback;
            return;
        }

        // Show placeholder
        img.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.className = 'blog-image-placeholder';
        placeholder.innerHTML = `
            <div class="placeholder-content">
                <span class="placeholder-icon">🖼️</span>
                <span class="placeholder-text">Image not available</span>
            </div>
        `;
        img.parentNode.insertBefore(placeholder, img);
    }

    // Utility: Get optimal image path
    static getImagePath(slug, type, format = 'webp') {
        const basePath = '/assets/images/blog';
        const paths = {
            cover: `${basePath}/covers/${slug}-cover.${format}`,
            thumbnail: `${basePath}/thumbnails/${slug}-thumb.${format}`,
            content: `${basePath}/content/${slug}`,
            icon: `${basePath}/icons/${slug}-icon.svg`
        };
        return paths[type] || paths.content;
    }

    // Utility: Create responsive image element
    static createResponsiveImage(slug, type, alt, className = '') {
        const webpSrc = BlogImageManager.getImagePath(slug, type, 'webp');
        const jpgSrc = BlogImageManager.getImagePath(slug, type, 'jpg');
        
        return `
            <picture class="${className}">
                <source srcset="${webpSrc}" type="image/webp">
                <img src="${jpgSrc}" alt="${alt}" class="blog-${type}" data-webp="${webpSrc}" data-fallback="${jpgSrc}">
            </picture>
        `;
    }
}

// Lightbox CSS (injected dynamically)
const lightboxCSS = `
    .blog-image-lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
    }

    .lightbox-overlay {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .lightbox-container {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
    }

    .lightbox-image {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 10px;
    }

    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0.5rem;
        line-height: 1;
    }

    .lightbox-close:hover {
        opacity: 0.7;
    }

    .blog-image-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f5f5f5;
        border: 2px dashed #ddd;
        border-radius: 10px;
        padding: 2rem;
        margin: 2rem 0;
        min-height: 200px;
    }

    .placeholder-content {
        text-align: center;
        color: #999;
    }

    .placeholder-icon {
        font-size: 3rem;
        display: block;
        margin-bottom: 1rem;
    }

    .placeholder-text {
        font-size: 1.1rem;
    }
`;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Inject lightbox CSS
    const style = document.createElement('style');
    style.textContent = lightboxCSS;
    document.head.appendChild(style);

    // Initialize image manager
    new BlogImageManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlogImageManager;
}