// Color palette generated on coolors.co --> https://coolors.co/3d3522-4a442d-e4dfce-386150-58b09c-caf7e2-1a47cb-73aeed-e0f1ff
const colors = {
  darkBlack: 'hsl(246, 42%, 11%)',
  mediumBlack: 'hsl(246, 12%, 21%)',
  darkBrown: 'hsl(48 24% 23%)',
  mediumBrown: 'hsl(48 24% 23%)',
  lightBrown: 'hsl(46 29% 85%)',
  darkGreen: 'hsl(155 27% 30%)',
  mediumGreen: 'hsl(166 36% 52%)',
  lightGreen: 'hsl(152 74% 88%)',
  darkBlue: 'hsl(225 77% 45%)',
  mediumBlue: 'hsl(211 77% 69%)',
  lightBlue: 'hsl(207 100% 94%)',
  offWhite: 'hsl(207 95% 100%)',
  lightGray: 'hsl(207 86% 96%)',
  mediumGray: 'hsl(207, 5%, 46%)',
  darkGray: 'hsl(207, 10%, 27%)',
};

const lightTheme = {
  backgroundPrimary: colors.lightGray,
  backgroundSecondary: colors.offWhite,
  colorPrimary: colors.darkBlue,
  colorSecondary: colors.darkGray,
  borderPrimary: colors.mediumGreen,
  borderSecondary: colors.darkBlue,
  shadowPrimary: colors.mediumGray,
};

const darkTheme = {
  backgroundPrimary: colors.darkBlack,
  backgroundSecondary: colors.mediumBlack,
  colorPrimary: colors.lightBlue,
  colorSecondary: colors.lightGray,
  borderPrimary: colors.lightGray,
  shadowPrimary: colors.lightGray,
};

export { colors, lightTheme, darkTheme };
