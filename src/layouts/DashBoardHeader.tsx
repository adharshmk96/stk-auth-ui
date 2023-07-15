// libraries
import { Link, useNavigate } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import { DropdownMenu } from "@kobalte/core";

// components
import { useAuth } from "@/context/auth";
import ThemeSwitch from "@/components/ThemeSwitch";

// content
import content from "@/content/en";
import { pageUrls } from "@/constants";

const fc = content.dashboard;
const fch = content.header;

interface HeaderProps {
  logout: () => void;
}

function HeaderMenu(props: HeaderProps) {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate(pageUrls.dashboard);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class="btn btn-square btn-ghost">
        <Icon icon="ph:user-circle-fill" class="text-4xl" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content class="px-2 py-4 shadow menu dropdown-content bg-base-300 rounded-box gap-5">
          <DropdownMenu.Item class="text-base-content" onSelect={navigateToDashboard}>
            <span class="flex flex-row items-center justify-start gap-5 px-5 text-xl">
              <Icon icon="material-symbols:dashboard-outline" class="text-2xl" />
              {fch.dashboard}
            </span>
          </DropdownMenu.Item>
          <DropdownMenu.Item class="text-base-content" onSelect={props.logout}>
              <span class="flex flex-row items-center justify-start gap-5 px-5 text-xl">
                <Icon icon="ph:sign-out" class="text-2xl" />
                {fch.logout}
              </span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

interface DashBoardHeaderProps {
  // add props here
}

function DashBoardHeader(props: DashBoardHeaderProps) {
  const navigate = useNavigate();
  const { logout, error } = useAuth();

  const logoutUser = () => {
    logout();

    if (error() == "") {
      navigate("/");
    }
  };

  return (
    <header class="flex justify-between items-center p-5 border-b-2 border-base-300 bg-neutral text-neutral-content base-content">
      <h2>{fc.title}</h2>
      <div class="flex gap-2 items-center justify-center">
        <ThemeSwitch />
        <HeaderMenu logout={logoutUser} />
      </div>
    </header>
  );
}

export default DashBoardHeader;
