# 💻 Modern Developer Portfolio

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.2-purple?logo=vite&style=flat-square)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss&style=flat-square)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff69b4?logo=framer&style=flat-square)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

An ultra-modern, high-performance developer portfolio built using **React 18**, **Vite**, and **Tailwind CSS**. It features rich interactive animations powered by **Framer Motion**, clean glassmorphic components, and an integrated contact form.

The repository also retains the **legacy Flask version** of the portfolio for historical reference.

---

## ✨ Features

*   **Glassmorphism UI**: Beautiful semi-transparent layouts with sleek blur effects and modern design accents.
*   **Fluid Animations**: Interactive components, page loading transitions, and card hovers powered by Framer Motion.
*   **Project filtering**: Dynamic category filtering (All, AI/ML, Web, Mobile) with animated grid transitions.
*   **Skill Ratings**: Interactive skills showcase featuring dynamic progress bars.
*   **Integrated Contact Form**: Direct client-side message sending powered by **EmailJS**.
*   **Fully Responsive**: Optimised for mobile, tablet, and desktop screens.
*   **Legacy Backend Support**: Includes the original Python-Flask backend implementation in the `/legacy_flask` directory.

---

## 🛠️ Tech Stack

### Frontend (React App)
*   **Framework**: [React](https://react.dev/) (Vite bundler)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
*   **Contact Service**: [EmailJS](https://www.emailjs.com/) (Direct email integration without backend setup)

### Legacy App
*   **Backend**: [Python Flask](https://flask.palletsprojects.com/)
*   **Templates**: Jinja2 & Vanilla CSS

---

## 📂 Project Structure

```bash
Portfolio/
├── legacy_flask/           # Original Python-Flask application
│   ├── templates/          # HTML templates
│   ├── static/             # Styles, profile image, and resume
│   └── app.py              # Flask app entrypoint
├── src/                    # New React/Vite application
│   ├── assets/             # Images and local documents
│   ├── components/         # Reusable UI components (Hero, About, Projects, etc.)
│   ├── pages/              # Page layouts (Home)
│   ├── index.css           # Tailwind custom directive & base styles
│   └── main.jsx            # React root component
├── tailwind.config.js      # Tailwind UI setup
├── vite.config.js          # Vite build parameters
├── package.json            # Node scripts and dependencies
└── README.md               # You are here!
```

---

## 🚀 Getting Started

To run the modern portfolio locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sam123-arjun/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The application will start running at `http://localhost:5173/`.*

4. **Build for production:**
   ```bash
   npm run build
   ```
   *This compiles optimized static assets into the `dist/` folder.*

---

## 🐍 Running the Legacy Flask App

If you want to run the original Flask version:

1. **Navigate to the legacy directory:**
   ```bash
   cd legacy_flask
   ```

2. **Set up a python virtual environment & install Flask:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate

   pip install Flask
   ```

3. **Run the Flask application:**
   ```bash
   python app.py
   ```
   *The Flask app will start running at `http://127.0.0.1:5000/`.*

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
