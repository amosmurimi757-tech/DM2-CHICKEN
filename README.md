# 🥩 Fresh Meat Daily - Local Meat Business Website

A professional, mobile-first website for a local meat business in Dagoreti, Nairobi. Features WhatsApp integration for seamless order placement and management.

## 📋 Project Overview

**Fresh Meat Daily** is a simple yet professional website that enables customers to:
1. Browse meat products (Chicken, Beef, Goat, and more)
2. Place orders through an easy-to-use form
3. Automatically open WhatsApp with pre-filled order details
4. Get instant confirmation from the business

**Key Features:**
- ✅ No backend server required
- ✅ No database needed
- ✅ Mobile-first responsive design
- ✅ WhatsApp Click-to-Chat integration
- ✅ Form validation and error handling
- ✅ Automatic free delivery calculation
- ✅ Fast loading and optimized for all devices
- ✅ Professional business aesthetic

## 🏢 Business Details

- **Name:** Fresh Meat Daily
- **Location:** Dagoreti Slaughter House, Nairobi
- **WhatsApp/Phone:** 0701698883
- **Service Area:** Nairobi
- **Free Delivery:** Orders above KSH 10,000

## 📁 Project Structure

```
Fresh Meat Daily/
├── index.html           # Home page
├── products.html        # Products showcase
├── order.html          # Order form page
├── about.html          # About us
├── contact.html        # Contact & FAQ
├── css/
│   └── styles.css      # All styling (mobile-first responsive)
├── js/
│   └── script.js       # WhatsApp integration & form handling
├── img/                # Product images (currently uses placeholders)
└── README.md           # This file
```

## 🚀 How to Use

### 1. **View the Website Locally**

#### Option A: Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

#### Option B: Using Node.js (http-server)
```bash
npm install -g http-server
http-server
```

Then open the provided URL (usually `http://localhost:8080`)

#### Option C: Using VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option D: Direct File Open (Limited)
Simply open `index.html` in your browser (some features may be limited)

### 2. **Website Pages**

| Page | Purpose |
|------|---------|
| **Home (index.html)** | Welcome, business info, call-to-action |
| **Products** | Showcase available meat types |
| **Order** | Main order form with WhatsApp integration |
| **About** | Business story and commitment |
| **Contact** | Contact info, location, FAQ |

### 3. **How Orders Work**

1. Customer visits website
2. Fills out the order form with:
   - Name & phone number
   - Meat type & quantity
   - Order value (for delivery fee calculation)
   - Delivery or pickup preference
   - Preferred time
   - Special requests (optional)
3. Clicks "Send Order to WhatsApp"
4. WhatsApp opens automatically with pre-filled order details
5. Customer sends message to business
6. Business confirms via WhatsApp

## 🎨 Design Features

### Color Scheme
- **Primary Red:** #d32f2f (Trust, meat, energy)
- **Dark Text:** #212529 (Professional, readable)
- **Light Gray:** #f8f9fa (Clean background)
- **WhatsApp Green:** #25d366 (For floating button)

### Typography
- Sans-serif font family (Segoe UI, Tahoma, etc.)
- Clear hierarchy with well-sized headings
- Readable line-height and letter-spacing

### Responsive Breakpoints
- **Mobile:** 0px - 767px (1-column layouts)
- **Tablet:** 768px - 1023px (2-column layouts)
- **Desktop:** 1024px+ (3-4 column layouts)

### Features
- ✅ Floating WhatsApp button (always visible)
- ✅ Sticky navigation bar
- ✅ Mobile menu responsive
- ✅ Touch-friendly buttons
- ✅ Fast page transitions
- ✅ Clean, trustworthy aesthetic

## 📱 WhatsApp Integration

### How It Works
The website uses WhatsApp's Click-to-Chat API:
- Format: `https://wa.me/[PHONE_NUMBER]?text=[ENCODED_MESSAGE]`
- Message is automatically formatted with all order details
- Opens WhatsApp Web (if installed) or prompts to download

### WhatsApp Message Example
```
📦 NEW MEAT ORDER

Customer Name: John Doe
Phone: 0701234567
Meat Type: Beef
Quantity: 5kg
Estimated Order Value: KSH 15,000
Delivery/Pickup: Delivery
Delivery Address: 123 Main Street, Nairobi
Preferred Time: Afternoon (12PM - 4PM)
Special Requests: Lean cuts, sliced

---
💡 Note: Free delivery applies only to orders above KSH 10,000
```

## ⚙️ Configuration

To modify business details, edit `js/script.js`:

```javascript
const BUSINESS_CONFIG = {
    whatsappNumber: '254701698883',  // Change phone number
    businessName: 'Fresh Meat Daily',
    location: 'Dagoreti Slaughter House',
    minFreeDelivery: 10000  // Minimum order for free delivery (in KSH)
};
```

## 🖼️ Adding Product Images

Currently, the website uses emoji placeholders. To add real images:

1. Save product images to the `img/` folder:
   - `chicken-placeholder.jpg` → `chicken.jpg`
   - `beef-placeholder.jpg` → `beef.jpg`
   - `goat-placeholder.jpg` → `goat.jpg`
   - `other-placeholder.jpg` → `other.jpg`

2. Update the image paths in `products.html`:
   ```html
   <!-- Before -->
   <img src="img/chicken-placeholder.jpg" alt="Fresh Chicken" ...>
   
   <!-- After -->
   <img src="img/chicken.jpg" alt="Fresh Chicken" ...>
   ```

## 🔍 Form Validation

The form includes client-side validation for:
- ✅ Customer name (minimum 2 characters)
- ✅ Phone number (10-13 digits)
- ✅ Meat type (must be selected)
- ✅ Quantity (cannot be empty)
- ✅ Order value (must be > 0)
- ✅ Delivery/pickup option (must be selected)
- ✅ Delivery address (required if delivery is selected)
- ✅ Preferred time (must be selected)

## 💡 Features Explained

### Free Delivery Alert
- When order value ≥ KSH 10,000: Shows "FREE DELIVERY" (green)
- When order value < KSH 10,000: Shows "Delivery charges apply" (yellow)
- Calculated automatically as customer enters order value

### Delivery Address Field
- Only shows when "Home Delivery" is selected
- Hidden when "Pickup" is selected
- Required field for delivery orders

### Floating WhatsApp Button
- Always visible on all pages
- Bottom-right corner
- Animated floating effect
- Opens WhatsApp with a greeting message

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Responsive design with Flexbox & Grid
- **JavaScript (Vanilla)** - No frameworks or libraries required
- **WhatsApp API** - Click-to-Chat integration

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- No external dependencies
- All assets are local
- Fast loading times
- Optimized CSS and JavaScript

## 📝 Content Management

### Update Business Contact
Edit in multiple files:
- `index.html` - Hero section, CTA buttons
- `products.html` - Footer
- `order.html` - Form alerts
- `about.html` - Contact info
- `contact.html` - Main contact details
- `css/styles.css` - No changes needed
- `js/script.js` - BUSINESS_CONFIG object

### Update Business Location
Edit in:
- `index.html` - Location section
- `contact.html` - Map placeholder
- `about.html` - Why Dagoreti section

### Add New Meat Types
Edit `order.html` form dropdown:
```html
<select id="meatType" name="meatType" required>
    <option value="">-- Select Meat Type --</option>
    <!-- Add new option here -->
    <option value="New Meat Type">New Meat Type</option>
</select>
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Upload all files
3. Enable Pages in repository settings
4. Website available at `https://username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Connect GitHub repository
2. Auto-deploys on push
3. Free HTTPS and custom domain options

### Option 3: Vercel (Free)
1. Deploy with one click
2. Automatic deployments
3. No configuration needed

### Option 4: Traditional Web Hosting
- Upload files via FTP
- Works on any web server
- No special configuration needed

### Option 5: Email Newsletter
- Add link in email signature
- Share in WhatsApp status
- Include in Google My Business

## 📊 Form Data Flow

```
User fills form
      ↓
JavaScript validates input
      ↓
If valid: Generate WhatsApp message
      ↓
Encode message for URL
      ↓
Open WhatsApp with: https://wa.me/254701698883?text=ENCODED_MESSAGE
      ↓
User sees pre-filled order details
      ↓
User clicks "Send" in WhatsApp
      ↓
Business receives order message
```

## 🎯 Next Steps & Enhancements (Future)

- [ ] Add Google Maps embed
- [ ] Add product price list
- [ ] Add inventory/availability checking
- [ ] Add payment gateway (M-Pesa, Stripe)
- [ ] Add order history tracking
- [ ] Add customer reviews/testimonials
- [ ] Add email confirmation
- [ ] Add SMS integration
- [ ] Add multi-language support (English/Swahili)
- [ ] Add business hours indicator
- [ ] Add delivery tracking
- [ ] Add analytics

## ❓ Troubleshooting

### WhatsApp Not Opening?
- Ensure WhatsApp is installed
- Try opening directly from mobile device
- Check internet connection
- Clear browser cache

### Form Not Submitting?
- Check browser console for errors
- Ensure all required fields are filled
- Try a different browser
- Clear browser cache

### Images Not Loading?
- Ensure image files exist in `img/` folder
- Check file paths in HTML
- Use correct file extensions (.jpg, .png, etc.)

### Delivery Address Field Not Showing?
- Select "Home Delivery" option
- Reload the page if problem persists

## 📞 Support

For questions about:
- **Website customization:** Refer to the sections above
- **WhatsApp integration:** Check WhatsApp Click-to-Chat documentation
- **Hosting:** See Deployment Options section
- **Technical issues:** Check browser console (F12)

## 📄 License

This website template is free to use for your business. Customize and deploy as needed.

## 🙏 Credits

Designed and developed for Fresh Meat Daily, a local business serving Nairobi from Dagoreti Slaughter House.

---

**Made with ❤️ for Fresh Meat Daily**
*Serving fresh, quality meat to the Nairobi community since [Year]*

**Contact:** 0701698883 | **WhatsApp:** [Link available on website]

#   D M 2 - C H I C K E N S  
 #   D M 2 - C H I C K E N S  
 #   D M 2 - C H I C K E N S  
 #   N E W - F O L D E R  
 #   N E W - F O L D E R  
 #   N E W - F O L D E R  
 