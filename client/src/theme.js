// Color palette generated on coolors.co --> https://coolors.co/3d3522-4a442d-e4dfce-386150-58b09c-caf7e2-1a47cb-73aeed-e0f1ff
const colors = {
  darkBrown: 'hsl(42 28% 19%)',
  mediumBrown: 'hsl(48 24% 23%)',
  lightBrown: 'hsl(46 29% 85%)',
  darkGreen: 'hsl(155 27% 30%)',
  mediumGreen: 'hsl(166 36% 52%)',
  lightGreen: 'hsl(152 74% 88%)',
  darkBlue: 'hsl(225 77% 45%)',
  mediumBlue: 'hsl(211 77% 69%)',
  lightBlue: 'hsl(207 100% 94%)',
  lightGray: 'hsl(207 86% 96%)',
};

const lightTheme = {
  backgroundPrimary: colors.lightGray,
  backgroundSecondary: colors.mediumGreen,
  colorPrimary: colors.darkBlue,
  colorSecondary: colors.lightGreen,
  borderPrimary: colors.mediumGreen,
  shadowPrimary: colors.mediumGreen,
};

const darkTheme = {
  backgroundPrimary: colors.darkBrown,
  backgroundSecondary: colors.mediumGreen,
  colorPrimary: colors.lightBlue,
  colorSecondary: colors.lightGreen,
  borderPrimary: colors.mediumGreen,
  shadowPrimary: colors.lightGreen,
};

export { colors, lightTheme, darkTheme };
