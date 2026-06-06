# Elysia Beauty Lounge

A premium, high-end, responsive website for the Elysia Beauty Lounge salon, built as a multi-page static web application.

## 🌟 Tech Stack
*   **Core:** HTML5, Vanilla JavaScript (ES6 Modules)
*   **Styling:** Custom Vanilla CSS (custom design system, premium HSL palettes, glassmorphism, responsive flex/grid layouts)
*   **Bundler & Dev Server:** Vite
*   **Icons:** Elegant Custom SVG Graphics and Emojis
*   **Booking Integration:** Fresha (External booking system)

## 🏗️ Architecture & Project Structure
The project uses a modular design to keep components and pages maintainable without the complexity of a JS framework:

```
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── package.json            # Scripts and dev dependencies
├── vite.config.js          # Vite multi-page configuration
├── index.html              # Main homepage
├── [service-page].html     # Individual category pages (Manicure, Hair, Make-up, etc.)
├── public/                 # Static assets
│   └── images/             # Optimized WebP and AVIF images
└── src/
    ├── main.js             # Main JavaScript entrypoint
    ├── js/
    │   ├── navigation.js   # Navigation, mega-menu, and mobile drawer functionality
    │   └── shared-layout.js # Dynamic layout injection (Navbar/Footer) for inner pages
    └── styles/
        ├── variables.css   # Color palette (Gold/Cream/Noir) and tokens
        ├── base.css        # Base styling and resets
        ├── components.css  # Buttons, cards, mega-menu, footer, and common elements
        ├── sections.css    # Layout structure sections
        └── responsive.css  # Media queries and mobile breakpoint overrides
```

## 🚀 Quick Start

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AndreiNeptune/elysiabeautylounge.git
   cd elysiabeautylounge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

### Building for Production
To build static, optimized files ready for deployment on any static hosting or cPanel:
```bash
npm run build
```
This generates the optimized output inside the `/dist` directory.
