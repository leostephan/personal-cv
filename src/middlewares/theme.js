import { changeTheme } from "../style/theme";
import ThemeActionTypes from "../actions/theme";

const handledActions = [ThemeActionTypes.SET_THEME];

const themeMiddleware = () => (next) => (action) => {
  const { type, payload } = action;

  if (~handledActions.indexOf(type)) {
    const { themeId } = payload;

    if (themeId) {
      changeTheme(themeId);
    }
  }

  return next(action);
};

export default themeMiddleware;
