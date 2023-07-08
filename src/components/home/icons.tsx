import { Icon } from "@iconify-icon/solid";

interface HomeIconProps {
    icon : string;
}

function HomeIcon(props: HomeIconProps) {
    return (
        <Icon icon={props.icon} class="text-3xl" />
    )
}

export default HomeIcon;