# Personal Portfolio Website

## 🎯 Project Overview
A modern, responsive personal portfolio website showcasing technical skills, projects, and professional background. Built with React to demonstrate full-stack frontend development capabilities.

## ✨ Features
- **Modern UI Design** - Glassmorphism, gradients, smooth animations
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **HashRouter Navigation** - Smooth page transitions
- **Professional Sections** - About, Skills, Projects, Contact
- **Interactive Elements** - Hover effects, animations, transitions
- **Dark Theme** - Easy on the eyes, modern aesthetic

## 🛠️ Tech Stack
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **CSS3** - Custom styling
- **Google Fonts** - Outfit, Space Grotesk fonts
- **GitHub Pages** - Deployment

## 📁 Project Structure
```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── Projects.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── LICENSE
```

## 🚀 Quick Start
```bash
# Clone the repository
git clone https://github.com/srikar-1810/portfolio
cd portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📂 Deployment to GitHub Pages

### Step 1: Update package.json
```json
{
  "homepage": "https://srikar-1810.github.io/portfolio"
}
```

### Step 2: Install gh-pages
```bash
npm install gh-pages --save-dev
```

### Step 3: Add deploy scripts
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your GitHub repository
2. Settings → Pages
3. Select "gh-pages" branch
4. Click Save

## 🎨 Design Features
- Purple-cyan gradient color scheme
- Glass morphism effects on cards
- Grid pattern background overlay
- Smooth fade-in animations
- Hover effects with transforms
- Responsive breakpoints at 968px, 768px, 480px

## 📄 Sections

### Home Page
- Hero section with animated entrance
- Profile card with social links
- About Me section
- Research Interests grid
- Technical Skills tags
- Personal Details contact cards

### Projects Page
- Project cards with hover animations
- Tech stack badges
- GitHub links
- Project descriptions
- Visual hierarchy

## 🚀 Performance
- Lighthouse Score: 95+
- Fully responsive
- Optimized assets
- Lazy loading ready

## 📝 License
MIT License - See LICENSE file for details

## 👤 Author
**N. SAI SRIKAR**  
B.Tech AI Student | Mahindra University

## 🔗 Links
- GitHub: [srikar-1810](https://github.com/srikar-1810)
- LinkedIn: [srikar-nadipalli](https://linkedin.com/in/srikar-nadipalli-229691282/)
- Email: nadipallisrikar@gmail.com