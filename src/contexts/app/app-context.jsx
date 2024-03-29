"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "./app-reducer";

const AppContext = createContext();
const initialState = {
  theme: "dark",
  isOverlayShow: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  const changeOverlayShow = (isOverlayShow) => {
    dispatch({ type: "CHANGE_OVERLAY_SHOW", payload: isOverlayShow });
  };

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ ...state, changeTheme, changeOverlayShow }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
