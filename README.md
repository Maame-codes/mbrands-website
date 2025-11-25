M. Brands | Where Vision Meets Virtual Reality

A modern, fully responsive creative agency website built with React, Tailwind CSS, and Vite. This project serves as the digital storefront for M. Brands, showcasing services, portfolio items, and client testimonials with a sleek, user-centric design.

🚀 Tech Stack

Framework: React (v18+)

Build Tool: Vite

Styling: Tailwind CSS (v3)

Icons: Lucide React

Fonts: Poppins (via Google Fonts)

✨ Features

Responsive Design: Fully adaptable layout for mobile, tablet, and desktop.

Dynamic Portfolio: Filterable portfolio section (Web Design, Branding, Logos, etc.).

Smooth Navigation: Smooth scrolling to specific sections (Hero, Services, About, Contact).

Interactive UI: Hover effects, mobile navigation menu, and dynamic header transparency on scroll.

Dynamic Favicon: Programmatically updates the browser tab icon.

🛠️ Installation & Setup

Follow these steps to run the project locally on your machine.

1. Clone the repository

git clone [https://github.com/Maame-codes/mbrands-website.git](https://github.com/Maame-codes/mbrands-website.git)
cd mbrands-website


2. Install Dependencies

npm install


3. Run the Development Server

npm run dev


Open your browser and navigate to http://localhost:5173.

📂 Project Structure

mbrands-website/
├── public/
│   └── favicon.png      # Browser tab icon
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Tailwind directives & global styles
│   └── main.jsx         # Entry point
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies


🎨 Customization

Changing Images

The project currently uses high-quality placeholder images from Unsplash. To use your own images:

Place your images in the public/ folder.

Update the src paths in App.jsx:

// Before
img: "[https://images.unsplash.com/](https://images.unsplash.com/)..."

// After
img: "/my-local-image.jpg"


Updating Colors

The primary brand color is #8c52ff (Purple). You can find and replace this hex code in App.jsx or extend the tailwind.config.js file to add a custom color palette.

🔧 Troubleshooting

Issue: [plugin:vite:css] [postcss] It looks like you're trying to use tailwindcss directly...

Fix: This project uses Tailwind CSS v3. If you accidentally upgraded to v4, run this command to restore compatibility:

npm install -D tailwindcss@3.4.17


