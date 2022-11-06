import { createSelector } from "@reduxjs/toolkit";
import { selectThemeId } from "../../reducers/misc";
import { ThemeIds } from "../../style/theme";

const selectIsLightOn = createSelector(
  [selectThemeId],
  (themeId) => themeId === ThemeIds.COLORFUL
);

const selectLightButtonProps = createSelector(selectIsLightOn, (toggled) => ({
  toggled,
}));

export default selectLightButtonProps;
