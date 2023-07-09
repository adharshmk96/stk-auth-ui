// libraries
import { Icon } from "@iconify-icon/solid";

// components
import ThemeSwitch from "@/components/ThemeSwitch";

// content
import content from "@/content/en";
import { AUTH_SERVER_URL } from "@/config";
import { useNavigate } from "@solidjs/router";

const fc = content.dashboard;

interface DashBoardHeaderProps {
  // add props here
}

function DashBoardHeader(props: DashBoardHeaderProps) {
  const navigate = useNavigate();

  const logout = async () => {
    const result = await fetch(`${AUTH_SERVER_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include"
    })

    if (result.ok) { navigate("/"); return }

    alert("Logout Failed.")

  }

  return (
    <header class="flex justify-between items-center p-5 border-b-2 border-b-black dark:bg-gray-900 dark:text-gray-100">
      <h2>{fc.title}</h2>
      <div class="flex gap-5 items-center justify-center">
      <ThemeSwitch />
      <button 
        onClick={logout}
        type="button"
      >
        <Icon icon="ph:sign-out" class="text-3xl" />
      </button>
      </div>
      
    </header>
  );
}

export default DashBoardHeader;
