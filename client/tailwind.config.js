/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {   
          "primary": "#001B1C",
                  
          "secondary": "#ed0600",
                  
          "accent": "#f3f3f3",
                  
          "neutral": "#c8c8c8",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#000000",
                  
          "success": "#34d399",
                  
          "warning": "#e11d48",
                  
          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

