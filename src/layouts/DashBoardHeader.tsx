// libraries
import { Icon } from "@iconify-icon/solid";

// components
import ThemeSwitch from "@/components/ThemeSwitch";

// content
import content from "@/content/en";
import { AUTH_SERVER_URL } from "@/config";
import { useNavigate } from "@solidjs/router";
import { useAuth } from "@/context/auth";

const fc = content.dashboard;

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
      
  }

  return (
    <header class="flex justify-between items-center p-5 border-b-2 border-base-300 bg-neutral text-neutral-content base-content">
      <h2>{fc.title}</h2>
      <div class="flex gap-5 items-center justify-center">
      <ThemeSwitch />
      <button 
        onClick={logoutUser}
        type="button"
      >
        <Icon icon="ph:sign-out" class="text-3xl" />
      </button>
      </div>
      
    </header>
  );
}

export default DashBoardHeader;
