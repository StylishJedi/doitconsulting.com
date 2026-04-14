# Deployment Guide - GitHub Pages

Follow these steps to deploy your website to GitHub Pages for free hosting.

## 🚀 Quick Setup

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" button and select "New repository"
3. Name it `doitconsulting-website` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have files)
6. Click "Create repository"

### 2. Upload Your Files

**Option A: Using GitHub Web Interface**
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all files from this folder
3. Add commit message: "Initial website upload"
4. Click "Commit changes"

**Option B: Using Command Line (if you have Git installed)**
```bash
cd doitconsulting-migration
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/doitconsulting-website.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. In your repository, go to **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under "Source", select **"Deploy from a branch"**
4. Choose **"main"** branch
5. Choose **"/ (root)"** folder
6. Click **Save**

### 4. Access Your Website

- Your website will be available at: `https://YOUR_USERNAME.github.io/doitconsulting-website`
- It may take 5-10 minutes to deploy initially
- GitHub will show you the URL once it's ready

## 🌐 Custom Domain Setup (Optional)

If you want to use your own domain (doitconsulting.com):

### 1. In GitHub Pages Settings
1. In the "Custom domain" field, enter: `doitconsulting.com`
2. Click Save
3. Check "Enforce HTTPS" once the domain verifies

### 2. Update DNS Settings (GoDaddy)
In your GoDaddy DNS management:

**For root domain (doitconsulting.com):**
- Add **A Records** pointing to:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

**For www subdomain:**
- Add **CNAME Record**: `www` pointing to `YOUR_USERNAME.github.io`

### 3. Verify Domain
- Create a file called `CNAME` in your repository root
- Content should be just: `doitconsulting.com`
- Commit this file

## ✅ Verification

Once deployed, your website should:
- Load properly on all devices
- Have working navigation
- Display contact information correctly
- Show all sections (About, Services, Contact)

## 🔧 Making Updates

To update your website:
1. Edit files directly on GitHub (click pencil icon)
2. Or upload new versions of files
3. Changes will automatically deploy within minutes

## 💰 Cost Savings

- **Before:** ~$100-200/year for GoDaddy hosting
- **After:** $0/year with GitHub Pages
- **Annual Savings:** $100-200!

## 🚨 Troubleshooting

**Website not loading?**
- Wait 10-15 minutes after initial setup
- Check GitHub Pages settings are correct
- Verify all files uploaded properly

**Custom domain not working?**
- DNS changes can take 24-48 hours
- Verify DNS records are correct
- Check CNAME file exists in repository

**Need help?** 
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Contact your IT consultant for assistance

---

🎉 **Congratulations!** You've successfully migrated from expensive GoDaddy hosting to free GitHub Pages!