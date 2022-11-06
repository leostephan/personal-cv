import React from "react";
import { useSelector } from "react-redux";
import { selectThemeId } from "../../reducers/misc";
import DynamicBackground from "./DynamicBackground";

const DynamicBackgroundContainer = (ownProps) => {
  const themeId = useSelector(selectThemeId);

  return <DynamicBackground {...ownProps} themeId={themeId} />;
};

export default DynamicBackgroundContainer;
