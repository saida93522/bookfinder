/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/*.html",
    "./core/templates/**/*.html",
    "./**/templates/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        main: "#D3CFCF",
        mustard: "#DAAA63",
        lightBean: "#B2ACAC",
        grayBrown: "#918989",
        myStone: "#333232",
      },
      fontFamily: {
        inkPlain: ["InktrapPlain"],
        inkReg: ["InktrapReg"],
        inkUB: ["InktrapUB"],
      },
      fontSize: {
        _step_3: ["clamp(0.43rem, calc(0.32rem + 0.56vw), 0.77rem)"],
        _step_2: ["clamp(0.52rem, calc(0.37rem + 0.73vw), 0.96rem)"],
        _step_1: ["clamp(0.63rem, calc(0.43rem + 0.96vw), 1.2rem)"],
        step_0: ["clamp(0.75rem, calc(0.5rem + 1.25vw), 1.5rem)"],
        step_1: ["clamp(0.9rem, calc(0.58rem + 1.63vw), 1.88rem)"],
        step_2: ["clamp(1.08rem, calc(0.66rem + 2.11vw), 2.34rem)"],
        step_3: ["clamp(1.3rem, calc(0.75rem + 2.72vw), 2.93rem)"],
        step_4: ["clamp(1.56rem, calc(0.85rem + 3.51vw), 3.66rem)"],
        step_5: ["clamp(1.87rem, calc(0.96rem + 4.52vw), 4.58rem)"],
        step_6: ["clamp(2.24rem, calc(1.08rem + 5.8vw), 5.72rem)"],
        step_7: ["clamp(2.69rem, calc(1.2rem + 7.44vw), 7.15rem)"],
        step_8: ["clamp(3.23rem, calc(1.32rem + 9.53vw), 8.94rem)"],
        step_9: ["clamp(3.87rem, calc(1.43rem + 12.18vw), 11.18rem)"],
        step_10: ["clamp(4.64rem, calc(1.53rem + 15.54vw), 13.97rem)"],
      },
      boxShadow: {
        out: "rgba(145, 134, 127) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
};
