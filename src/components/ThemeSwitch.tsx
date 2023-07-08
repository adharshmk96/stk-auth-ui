import { Show, createEffect } from "solid-js";
import { useTheme } from "../context/theme";
import { Icon } from "@iconify-icon/solid";

interface ThemeSwitchProps {
    // add props here
}

function ThemeSwitch(props: ThemeSwitchProps) {

    const [theme, setTheme] = useTheme();

    return (
        <div>
            <button onClick={() => setTheme(c => c === "dark" ? "light" : "dark")}>
                <Show
                    when={theme() === "light"}
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