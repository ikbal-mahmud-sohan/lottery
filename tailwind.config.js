module.exports = {
  purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          spacing: {
            "row": "calc(100% + 2rem)",
          },
          colors:{
            try3xblue: "#2666fa",
            try3xbluedeep: "#092238",
            try3xred: "#ed0033"
          },
        },
    },
    variants: {
        extend: {
            filter: ['hover', 'focus'],
            brightness: ['hover', 'focus'],
        },
    },
    plugins: [],
}
