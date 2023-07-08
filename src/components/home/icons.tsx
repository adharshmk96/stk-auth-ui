import { Icon } from "@iconify-icon/solid";

interface HomeIconProps {
    icon : string;
}

function HomeIcon(props: HomeIconProps) {
    return (
        <div>
            <Icon icon={props.icon} class="text-3xl" />
        </div>
    )
}

export default HomeIcon;