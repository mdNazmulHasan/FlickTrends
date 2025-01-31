# 🚀 FlickTrends

This is a React project built with [Vite](https://vitejs.dev/) and deployed on **GitHub Pages**.

## 🌍 Live Demo
🔗 [View the live site here](https://mdnazmulhasan.github.io/FlickTrends/)

---

## 📦 Installation

Follow these steps to set up and run the project locally.

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-github-username/your-repo-name.git
   ```

2. **Navigate to the project folder**  
   ```bash
   cd your-repo-name
   ```

3. **Install dependencies**  
   ```bash
   npm install
   ```

4. **Start the development server**  
   ```bash
   npm run dev
   ```
   The app will be available at **`http://localhost:5173/`**.

---

## 🚀 Deployment on GitHub Pages

This project is configured to deploy using `gh-pages`. Follow these steps to deploy it to GitHub Pages.

### **1️⃣ Update `vite.config.js`**
Ensure the `base` option is set to your repository name:
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
});
```

### **2️⃣ Install `gh-pages`**
```bash
npm install gh-pages --save-dev
```

### **3️⃣ Update `package.json` Scripts**
Modify `package.json` and add these scripts:
```json
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### **4️⃣ Deploy to GitHub Pages**
Run the following command:
```bash
npm run deploy
```

Your site will be live at:  
🔗 **https://your-github-username.github.io/your-repo-name/**  

---

## 🛠️ Technologies Used
- ⚡ **Vite** (Fast React setup)
- ⚛️ **React** (Frontend UI library)
- 🎨 **Tailwind CSS** *(Optional, if used)*
- 🌍 **GitHub Pages** (For deployment)

---

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).

---

## 💡 Contributions
Feel free to fork this repo, make improvements, and submit a pull request.  

📩 **Have questions?** Contact me at `najmul.hasan10@gmail.com`.  

---

🎉 **Happy Coding!** 🚀

