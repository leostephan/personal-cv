export const ThemeIds = {
  DARK: "DARK",
  COLORFUL: "COLORFUL",
};

export const Themes = {
  [ThemeIds.DARK]: {
    "--primary-color-900": "#FFFFFF",
    "--primary-color-850": "#EEEEEE",
    "--primary-color-800": "#DDDDDD",
    "--primary-color-750": "#CCCCCC",
    "--primary-color-700": "#BBBBBB",
    "--primary-color-650": "#AAAAAA",
    "--primary-color-600": "#999999",
    "--primary-color-550": "#888888",
    "--primary-color-500": "#777777",
    "--primary-color-450": "#666666",
    "--primary-color-400": "#555555",
    "--primary-color-350": "#444444",
    "--primary-color-300": "#333333",
    "--primary-color-250": "#222222",
    "--primary-color-200": "#111111",
  },
  [ThemeIds.COLORFUL]: {
    "--primary-color-900": "#111111",
    "--primary-color-850": "#222222",
    "--primary-color-800": "#333333",
    "--primary-color-750": "#444444",
    "--primary-color-700": "#555555",
    "--primary-color-650": "#666666",
    "--primary-color-600": "#777777",
    "--primary-color-550": "#888888",
    "--primary-color-500": "#999999",
    "--primary-color-450": "#AAAAAA",
    "--primary-color-400": "#BBBBBB",
    "--primary-color-350": "#CCCCCC",
    "--primary-color-300": "#DDDDDD",
    "--primary-color-250": "#EEEEEE",
    "--primary-color-200": "#FFFFFF",
  },
};

export const changeTheme = (themeId) => {
  const propertyNames = Object.keys(Themes[themeId] ?? {});

  for (const propName of propertyNames) {
    document.documentElement.style.setProperty(
      propName,
      Themes[themeId][propName]
    );
  }
};
