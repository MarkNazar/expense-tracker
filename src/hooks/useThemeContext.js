import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("Context was called outside theme provider");
  return context;
};

export default useThemeContext;
