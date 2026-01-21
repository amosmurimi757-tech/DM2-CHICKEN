# 🚀 QUICK START GUIDE - Fresh Meat Daily Website

## ⚡ Get Your Website Running in 2 Minutes

### Step 1: Open the Website

Choose ONE of these options:

#### **Easiest - Using Live Server (VS Code)**

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. ✅ Website opens automatically!

#### **Using Command Line (Python)**
```bash
cd "C:\Users\Administrator\New folder"
python -m http.server 8000
```
Then open: `http://localhost:8000`

#### **Direct File Open**
1. Double-click `index.html`
2. Website opens in browser

---

## 📋 What You Get

| File | Purpose |
|------|---------|
| `index.html` | Home page with business info |
| `products.html` | Meat products showcase |
| `order.html` | Order form (main feature!) |
| `about.html` | About the business |
| `contact.html` | Contact info & FAQ |
| `css/styles.css` | All styling (mobile-responsive) |
| `js/script.js` | WhatsApp integration |
| `README.md` | Full documentation |

---

## 🎯 Key Features

✅ **Mobile-First Design** - Looks perfect on phones, tablets, desktops  
✅ **WhatsApp Integration** - Orders open WhatsApp automatically  
✅ **No Backend Needed** - Pure HTML/CSS/JavaScript  
✅ **Free Delivery Calculator** - Automatic KSH 10,000 threshold  
✅ **Form Validation** - Catches errors before sending  
✅ **Floating Button** - Always-visible WhatsApp link  
✅ **Professional Look** - Trustworthy business aesthetic  

---

## 🛠️ Customize It (5 Minutes)

### Change Business Phone Number
Edit `js/script.js` line 7:
```javascript
whatsappNumber: '254701698883',  // ← Change this number
```

### Change Business Location
Edit `index.html`, `about.html`, `contact.html:
```html
Dagoreti Slaughter House  ← Replace with your location
```

### Change Free Delivery Amount
Edit `js/script.js` line 10:
```javascript
minFreeDelivery: 10000  // ← Change from 10,000 to your amount
```

### Add Product Images

1. Save images to `img/` folder:
   - chicken.jpg
   - beef.jpg
   - goat.jpg

2. Update `products.html`:
```html
<img src="img/chicken.jpg" alt="Fresh Chicken">
```

---

## 📱 Test the Order Form

1. Go to **Order** page
2. Fill out the form:
   - Name: John Doe
   - Phone: 0701698883
   - Meat: Chicken - Whole
   - Quantity: 3kg
   - Order Value: 12000
   - Delivery: Home Delivery
   - Address: 123 Main Street, Nairobi
   - Time: Afternoon
3. Click "Send Order to WhatsApp"
4. ✅ WhatsApp should open with all details!

---

## 📤 Deploy (Make It Live)

### Option 1: GitHub Pages (Recommended - FREE)
```bash
git init
git add .
git commit -m "Fresh Meat Daily Website"
git remote add origin https://github.com/username/fresh-meat-daily.git
git push -u origin main
```
Then enable Pages in GitHub settings.

### Option 2: Netlify (Easy - FREE)

1. Go to netlify.com
2. Drag & drop your folder
3. Done! Website is live

### Option 3: Traditional Hosting
- Upload files via FTP to your hosting
- No special configuration needed

---

## 📱 Mobile First!

The website works great on:
- ✅ iPhone/iPad
- ✅ Android phones
- ✅ Tablets
- ✅ Laptops & Desktops

Test responsiveness:
1. Open website in browser
2. Press F12 (Developer Tools)
3. Click device icon (top-left)
4. Select different devices to preview

---

## 🎨 Color Scheme

If you want to change colors, edit `css/styles.css` starting at line 15:

```css
:root {
    --primary-color: #d32f2f;      /* Red - Change to #your-color */
    --secondary-color: #1976d2;    /* Blue */
    --light-bg: #f8f9fa;           /* Light gray */
}
```

Popular options:
- Green (Fresh meat): `#22c55e`
- Orange (Fresh/warm): `#f97316`
- Blue (Professional): `#3b82f6`

---

## 🚀 Next Steps

1. **Test on phone** - Open on your mobile device
2. **Share with team** - Show WhatsApp manager
3. **Add images** - Replace placeholder images
4. **Deploy** - Make it live online
5. **Promote** - Share link in WhatsApp, email, social media

---

## ❓ Common Questions

**Q: Do I need a server?**  
A: No! Pure HTML/CSS/JavaScript - works anywhere.

**Q: Do I need to know code?**  
A: Only to customize. Using as-is? Just open index.html!

**Q: How do customers order?**  
A: Fill form → Click submit → WhatsApp opens → Send message.

**Q: Can I add payment?**  
A: Not built-in, but you can add M-Pesa/Stripe later.

**Q: How do I get the WhatsApp messages?**  
A: They come to your phone automatically via WhatsApp!

**Q: Can it work offline?**  
A: Yes for browsing, but WhatsApp needs internet.

---

## 📞 Support Files

- **README.md** - Full documentation
- **QUICK_START.md** - This file
- Check browser console (F12) for any errors

---

## 🎉 You're Done!

Your professional meat business website is ready to use!

**Next Action:** Open `index.html` and test it out! 🚀

---

Made for **Fresh Meat Daily** - Dagoreti Slaughter House  
WhatsApp: **0701698883**
