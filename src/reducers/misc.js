import { createSelector } from "@reduxjs/toolkit";
import ThemeActionTypes from "../actions/theme";
import { ThemeIds } from "../style/theme";

const initialState = {
  themeId: ThemeIds.DARK,
};

const emptyObj = {};

export const selectMiscState = createSelector(
  (state) => state.misc,
  (misc) => misc ?? emptyObj
);

export const selectThemeId = createSelector(
  selectMiscState,
  (misc) => misc.themeId
);

const miscReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ThemeActionTypes.SET_THEME:
      const { themeId } = payload;

      return {
        ...state,
        themeId,
      };

    default:
      return state;
  }
};

export default miscReducer;
