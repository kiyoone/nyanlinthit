import { createContext, useReducer } from "react";

export const DisplayTheme = createContext(null);

export const useThemeState = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "CHANGE_THEME":
          return { ...state, darkMode: !state.darkMode };
        case "CHANGE_LANGUAGE":
          return { ...state, myanmarLanguage: !state.myanmarLanguage };
        default:
          return state;
      }
    },
    {
      darkMode: false,
      myanmarLanguage: false,
    }
  );
  return [state, dispatch];
};

export const scrollTo = (obj) => {
  window.scrollTo(obj);
};