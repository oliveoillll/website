# TUDev Workshop: Build and Deploy Your Portfolio Website to Netlify 🚀

Welcome to the TUDev Workshop on building and deploying your very own portfolio website! 🎉 This workshop will guide you through creating a customizable portfolio website and deploying it to Netlify.

---

## 🚀 Project Overview

This project is a template designed to make it easy for you to showcase yourself and skills online. All you need to do is update the provided `resumeData.json` file with your information, and your site will be ready to go!

---

## 🛠 Tech Stack

- **HTML & SCSS**: For the structure and styling of the website.
- **JavaScript**: For interactivity.
- **npm**: To manage dependencies and run build tasks.
- **Netlify**: To host and deploy your site.

---

## 📋 Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/) (includes npm).
- Install [Git](https://git-scm.com/)
- Sign up for a free GitHub account on [GitHub](https://github.com/)
- Sign up for a free account on [Netlify](https://www.netlify.com/).

---

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/WebsiteHTMLWorkshop.git
   cd WebsiteHTMLWorkshop
   ```
2. **Install Dependencies**

   Run the following command to install required npm packages:

   ```bash
   npm install
   ```

3. **Update Your Info**

   Open the `resumeData.json` file and update it with your details:

   ```json
   {
     "basics": {
       "name": "Your Name",
       "role": "Your Role",
       "location": "Your Location",
       "email": "your.email@example.com",
       "phone": "+1 (XXX) XXX-XXXX"
     }
   }
   ```

4. **Run the Project Locally**

   Use the following command to start the development server:

   ```bash
   npm start
   ```

   Open http://localhost:3000 in your browser to see your website.

5. **Build for Production**

   To generate the optimized files for deployment, run:

   ```bash
   npm run build
   ```

   Your site will be ready in the `dist/` folder.

6. **Deploy to Netlify**

   We will cover this step during the workshop

## 📜 Scripts

Below are the key npm scripts you can use:

- `npm run start`: Starts a local development server with live reloading.
- `npm run build`: Builds the website for production.
- `npm run clean`: Cleans the dist/ folder.
- `npm run imagemin`: Optimizes images for faster loading.
- `npm run scss`: Compiles and minifies SCSS files.

## 💡 Tips

- Customize your site by editing `index.html` or styling with `css/style.scss`.
- For advanced changes, update other files in the repository as needed.

## ❤️ Acknowledgements

This project was created as part of a collaboration with TUDev & ACM. Special thanks to David Loder for developing the workshop materials.

The assets and frameworks are brought to you by the following:

- Netlify
- W3 Schools

## 📬 Questions?

Feel free to reach out to the club with any questions.

Happy coding! 🎨✨
