# Eclipse Kitchen & Bath Website

A complete, pixel-perfect replica of the Eclipse Kitchen & Bath website featuring modern minimalist luxury design for a construction/renovation company in Ottawa.

## 📁 Files Included

- `index.html` - Home page with hero, featured projects, services overview
- `about.html` - About page with company story and values
- `services.html` - Services page with detailed service descriptions
- `portfolio.html` - Portfolio page with filterable project gallery
- `testimonials.html` - Testimonials page with client reviews
- `contact.html` - Contact page with multi-step form
- `styles.css` - Complete stylesheet (1000+ lines of production-ready CSS)
- `script.js` - JavaScript for navigation, form validation, and interactions

## ✨ Features

### Design & UX
- **Minimalist Luxury Aesthetic** - Clean, sophisticated design with elegant typography
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Subtle transitions and hover effects
- **Professional Typography** - Playfair Display + Inter font pairing

### Technical Features
- **Multi-Step Form** - 5-step contact form with client-side validation
- **Portfolio Filtering** - JavaScript-powered project filtering
- **Mobile Navigation** - Responsive hamburger menu
- **Smooth Scrolling** - Enhanced UX with smooth scroll behavior
- **Form Validation** - Real-time validation with error messages
- **Phone Number Formatting** - Auto-formats phone input as user types

### SEO Optimization
- **Semantic HTML5** - Proper heading hierarchy, semantic elements
- **Meta Tags** - Complete meta descriptions, OG tags, Twitter cards
- **Schema.org Markup** - LocalBusiness structured data for Google
- **Alt Text** - All images have descriptive alt attributes
- **Clean URLs** - Descriptive, SEO-friendly file names
- **Fast Loading** - Optimized code, external font preloading
- **Accessibility** - ARIA labels, keyboard navigation support

## 🎯 What to Review

### 1. Visual Accuracy
- ✅ Compare layouts with original screenshots
- ✅ Check spacing, margins, and padding
- ✅ Verify font sizes and weights
- ✅ Confirm color accuracy (#C4A962 gold, #1a1a1a primary)

### 2. Functionality
- ✅ Test all navigation links
- ✅ Submit contact form through all steps
- ✅ Try portfolio filters
- ✅ Test mobile menu on small screens
- ✅ Check phone and email links (tel:, mailto:)

### 3. Responsiveness
- ✅ Test on mobile (< 768px)
- ✅ Test on tablet (768px - 1024px)
- ✅ Test on desktop (> 1024px)
- ✅ Check navigation collapse points

### 4. Browser Compatibility
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 🚀 How to Deploy (Netlify + Custom Domain)

### Step 1: Prepare Your Files
1. Create a new folder called `eclipse-website`
2. Copy all 8 files (6 HTML + CSS + JS) into this folder
3. Keep the flat structure (all files in root directory)

### Step 2: Deploy to Netlify

#### Option A: Drag & Drop (Easiest)
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click "Add new site" → "Deploy manually"
3. Drag your `eclipse-website` folder onto the deployment zone
4. Wait 30 seconds for deployment
5. You'll get a URL like `random-name-123.netlify.app`

#### Option B: Git Repository (Recommended for Updates)
1. Create a GitHub repository
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```
3. In Netlify, click "Add new site" → "Import from Git"
4. Connect your GitHub account
5. Select your repository
6. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
7. Click "Deploy site"

### Step 3: Add Custom Domain

1. **In Netlify:**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `eclipsekitchenandbath.ca`)
   - Click "Verify" and "Add domain"

2. **In Your Domain Registrar** (GoDaddy, Namecheap, etc.):
   - Go to DNS settings
   - Add these records:
   
   **For Root Domain (eclipsekitchenandbath.ca):**
   ```
   Type: A
   Name: @ (or leave empty)
   Value: 75.2.60.5
   ```
   
   **For WWW Subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

3. **Wait for DNS Propagation** (5 minutes - 48 hours, usually < 1 hour)

4. **Enable HTTPS** (Free SSL):
   - In Netlify, go to "Domain settings" → "HTTPS"
   - Click "Verify DNS configuration"
   - Click "Provision certificate"
   - Wait 1-2 minutes
   - Enable "Force HTTPS"

### Step 4: Configure Redirects (Optional but Recommended)

Create a file called `_redirects` in your root folder:
```
# Redirect www to non-www
https://www.eclipsekitchenandbath.ca/* https://eclipsekitchenandbath.ca/:splat 301!

# Or redirect non-www to www (choose one)
# https://eclipsekitchenandbath.ca/* https://www.eclipsekitchenandbath.ca/:splat 301!
```

## 📈 How to Improve SEO Further

### 1. Add Google Analytics
```html
<!-- Add to <head> of all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Add Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property with your domain
3. Verify using HTML meta tag or DNS record
4. Submit sitemap (see below)

### 3. Create and Submit Sitemap

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://eclipsekitchenandbath.ca/</loc>
    <lastmod>2026-01-29</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://eclipsekitchenandbath.ca/about.html</loc>
    <lastmod>2026-01-29</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://eclipsekitchenandbath.ca/services.html</loc>
    <lastmod>2026-01-29</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://eclipsekitchenandbath.ca/portfolio.html</loc>
    <lastmod>2026-01-29</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://eclipsekitchenandbath.ca/testimonials.html</loc>
    <lastmod>2026-01-29</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://eclipsekitchenandbath.ca/contact.html</loc>
    <lastmod>2026-01-29</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
```

### 4. Create robots.txt
```
User-agent: *
Allow: /

Sitemap: https://eclipsekitchenandbath.ca/sitemap.xml
```

### 5. Optimize Images
- Use WebP format for better compression
- Add lazy loading: `<img loading="lazy">`
- Use descriptive filenames: `modern-kitchen-renovation-ottawa.jpg`
- Compress images to < 200KB each

### 6. Add Local Business Listings
- **Google Business Profile** - Essential for local SEO
- **Yelp** - Good for reviews
- **HomeStars** - Popular in Canada
- **Houzz** - Great for renovation businesses
- **Facebook Business Page**

### 7. Implement Structured Data
The site already has LocalBusiness schema, but you can add more:
- Review schema for testimonials
- Product schema for services
- BreadcrumbList for navigation

### 8. Speed Optimization
```html
<!-- Add to <head> -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 9. Add Favicon
Create favicon.ico and add to <head>:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
```

### 10. Content Optimization
- Add blog section with renovation tips
- Include location-specific keywords (Ottawa, Kanata, Nepean, etc.)
- Add "Before & After" galleries
- Create detailed service pages with pricing guides
- Add FAQ section

## 🔧 Customization Guide

### Colors
Change colors in `styles.css` `:root`:
```css
--color-primary: #1a1a1a;
--color-gold: #C4A962;
```

### Fonts
Change fonts in `<link>` tags and CSS:
```css
--font-heading: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;
```

### Contact Information
Update in all HTML files:
- Phone: (613) 292-0311
- Email: chad@eclipsekitchenandbath.ca
- Location: Ottawa, Ontario

### Form Submission
To make the form actually submit, you need a backend. Options:

1. **Netlify Forms** (Easiest):
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

2. **Formspree** (Free tier available):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

3. **Custom Backend** (PHP, Node.js, etc.)

## 📱 Performance Metrics

Target scores (Google PageSpeed Insights):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## 🐛 Troubleshooting

### Form Not Submitting
- Check browser console for errors
- Ensure all required fields are filled
- Verify JavaScript is enabled

### Images Not Loading
- Check image URLs in HTML
- Replace with your own images
- Use Unsplash API or your own photos

### Mobile Menu Not Working
- Check JavaScript console
- Verify script.js is loaded
- Test on different devices

### Styling Issues
- Clear browser cache
- Check styles.css is linked correctly
- Verify CSS selectors match HTML

## 📞 Support

For issues or questions about the code, check:
- HTML validation: [validator.w3.org](https://validator.w3.org)
- CSS validation: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)
- Accessibility: [wave.webaim.org](https://wave.webaim.org)

## 📄 License

This is a custom-built website. Modify as needed for your client.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**No frameworks required** - Pure, clean code  
**Ready to deploy** - Upload and go live immediately
