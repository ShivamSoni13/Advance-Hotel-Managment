/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeD1: "#FF9843",
        brownCust: "#e1d5c9",
        Cust1: "#EFECEC",
        Custblue: "#211C6A",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans - serif"],
        Roboto: ["Roboto", "sans - serif"],
        Ubuntu: ["Ubuntu", "sans - serif"],
      },
      backgroundImage: {
        img: "url('./cafeBG2.jpg')",
        jail: "url('./cafeBg1.png')",
        jail2: "url('./jailImg2.jpg')",
        jailgif: "url('./jailGif.gif')",
        jail4: "url('./jail4.jpg')",
        jail5: "url('./jail5.png')",
        jail6: "url('./jail6.jpg')",
        jail7: "url('./jail7.jpg')",
        jails: "url('./jailimgs.jpg')",
        jails2: "url('./jailS2.jpg')",
        jails3: "url('./jailS3.png')",
        resturant: "url('./cafeBG.jpg')",
        hotel: "url('./resturantX.jpg')",
      },
      height: {
        menu: "460px",
        "90%": "90%",
        "85%": "85%",
      },
      boxShadow: {
        shadowCust: "0.5px 0px 10px 0.5px gray",
        shadowCust2: " 0 0 10px 2px orange",
      },
    },
  },
  plugins: [],
};
