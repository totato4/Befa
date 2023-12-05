/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        BlackHanSans: ['Black Han Sans'],
        Poppins: ['Poppins'],
      },
      maxWidth: {
        contWidth: '1390px',
      },
      space: {
        '75px': '75px',
      },
      colors: {
        headRed: `#B91616`,
        bodyBlack: '#101010',
        white1: '#E4E4E4',
      },
      textColor: {
        whiteText: '#FFFFFF',
      },
      gap: {
        mainHead: '55px 50px',
        mainHead2: '8.94308943089% 3.59712230216%',
        mainImg1: '54px 3.59712230216%',
      },
      gridTemplateColumns: {
        colXL: '430px 910px',
        colXL2: '670px',
        colLG: '344px 728px',
        colLG2: '536px',
        colMD: '258px 546px',
        colMD2: '402px',
        colSM: '215px 455px',
        colSM2: '335px',
        col: '215px 455px',
        col2: '335px',
        colMM: 'minmax(128.071942446px, 430px) minmax(271.035971223px, 910px)',
        colMM2: 'minmax(128.071942446px, 430px)',
        colHelloContainer: '30.9352517986% 65.4676258993%',
        colHelloContainerMD: '26.0869565217% 58.6956521739%',
        colPortfolio: 'minmax(200px, 670px) minmax(200px, 670px)',
        colHelloContainer2:
          'minmax(108px, 266.869565217px) minmax(243px, 600.456521739px)',
        colHelloContainer3: '108px 243px',
        colHelloLeft4: 'minmax',
      },
      gridTemplateRows: {
        rowXL: '280px 280px',
        rowLG: '224px 224px',
        rowMD: '168px 168px',
        rowSM: '140px 140px',
        row: '140px 140px',
        rowXL2: '395px',
        rowLG2: '316px',
        rowMD2: '237px',
        rowSM2: '197.5px',
        row2: '197.5px',
        rowHelloLeft: '45.528455284% 45.528455284%',
        rowHelloLeftMD: '48.1355932203% 48.1355932203%',
        rowHelloLeft2: '284px 284px',
        rowMM2: '1fr 1fr',
        rowNN: '100%',
      },
      screens: {
        mm: '1px',
      },
    },
  },
  plugins: [],
};
