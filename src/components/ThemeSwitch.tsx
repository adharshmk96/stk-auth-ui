import { Show, createEffect } from "solid-js";
import { useTheme } from "../context/theme";
import { Icon } from "@iconify-icon/solid";
import constants from "@/constants";

interface ThemeSwitchProps {
    // add props here
}

function ThemeSwitch(props: ThemeSwitchProps) {

    const [theme, setTheme] = useTheme();

    return (
        <div>
            <button onClick={() => setTheme(c => c === constants.DARK_MODE ? constants.LIGHT_MODE : constants.DARK_MODE)}>
                <Show
                    when={theme() === constants.LIGHT_MODE}
                    fallback={
                        <Icon icon="carbon:sunny" class="text-3xl" />
                    }
                >
                    <Icon icon="carbon:moon" class="text-3xl" />
                </Show>
            </button>
        </div>
    )
}

export default ThemeSwitch;