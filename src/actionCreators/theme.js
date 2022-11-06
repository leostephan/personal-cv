import ThemeActionTypes from "../actions/theme";

export const setTheme = (themeId) => ({
  type: ThemeActionTypes.SET_THEME,
  payload: {
    themeId,
  },
});
