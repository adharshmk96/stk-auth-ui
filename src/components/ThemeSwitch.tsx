import { Show, createEffect } from "solid-js";
import { useTheme } from "../context/theme";
import { Icon } from "@iconify-icon/solid";
import constants from "@/constants";

interface ThemeSwitchProps {
  // add props here
}

function ThemeSwitch(props: ThemeSwitchProps) {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(c => (c === constants.DARK_MODE ? constants.LIGHT_MODE : constants.DARK_MODE));
  }

  return (
    <div>
        <label class="swap swap-rotate">
  
          <input type="checkbox" onChange={toggleTheme} checked={theme() === constants.LIGHT_MODE} />
          
          <Icon icon="carbon:moon" class="swap-on text-3xl" />

          <Icon icon="carbon:sunny" class="swap-off text-3xl" />
          
        </label>
    </div>
  );
}

export default ThemeSwitch;
