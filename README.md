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

### Development Environment Setup

#### Windows (using Chocolatey)

1. Open PowerShell as Administrator and run:

```powershell
# Install Chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Required Tools
choco install nodejs git vscode -y
```

#### macOS (using Homebrew)

1. Open Terminal and run:

```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Required Tools
brew install node git
brew install --cask visual-studio-code
```

#### Linux (Ubuntu/Debian)

1. Open Terminal and run:

```bash
# Update package manager
sudo apt update && sudo apt upgrade

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git
sudo apt-get install git

# Install VS Code
sudo apt-get install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg
sudo apt update
sudo apt install code
```

### Verify Installation

Run these commands to verify everything is installed correctly:

```bash
node --version
npm --version
git --version
code --version
```

### Additional Setup Requirements

- Sign up for a free GitHub account on [GitHub](https://github.com/)
- Sign up for a free account on [Netlify](https://www.netlify.com/)

---

### Project Setup Steps

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

## Troubleshooting Tips

### Windows

- If you get permissions errors, make sure you're running PowerShell as Administrator
- If Chocolatey commands fail, try refreshing your PowerShell session

### macOS

- If Homebrew commands fail, try running `brew doctor`
- Make sure your system PATH includes Homebrew's bin directory

### Linux

- If apt commands fail, try running `sudo apt update` first
- For VS Code, you might need to restart your system after installation

## ❤️ Acknowledgements

This project was created as part of a collaboration with TUDev & ACM. Special thanks to David Loder for developing the workshop materials.

The assets and frameworks are brought to you by the following:

- Netlify
- W3 Schools

## 📬 Questions?

Feel free to reach out to the club with any questions.

Happy coding! 🎨✨
