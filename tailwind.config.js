/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      height:{
        header:'560px',
        rate:'400px',
    },

    fontSize:{
      h1:'2.6rem',
      // z:'300px',
  },

  screens:{
    xs:'475',
},

      colors:{
        main:'#080A1A',
        subMain:'#F20000',
        dry:'#0B0F29',
        star:'#FFB000',
        text:'#C0C0C0',
        border:'#4b5563',
        dryGray:'#E0D5D5',
    },
    },
  },
  plugins: [


  ],
}

// tailwindcss 