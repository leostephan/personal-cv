import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../actionCreators/theme";
import { selectThemeId } from "../../reducers/misc";
import { ThemeIds } from "../../style/theme";
import LightButton from "./LightButton";
import selectLightButtonProps from "./selectLightButtonProps";

const LightButtonContainer = (ownProps) => {
  const dispatch = useDispatch();
  const themeId = useSelector(selectThemeId);
  const selectedProps = useSelector(selectLightButtonProps);

  const onToggle = useCallback(() => {
    const nextThemeId =
      themeId === ThemeIds.COLORFUL ? ThemeIds.DARK : ThemeIds.COLORFUL;
    dispatch(setTheme(nextThemeId));
  }, [dispatch, themeId]);

  return <LightButton {...ownProps} {...selectedProps} onToggle={onToggle} />;
};

export default LightButtonContainer;
