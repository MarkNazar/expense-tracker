import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import useThemeContext from "../hooks/useThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeContext();
  return (
    <ButtonIcon onClick={toggleTheme}>
      {!isDark ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
};

export default ThemeToggle;
