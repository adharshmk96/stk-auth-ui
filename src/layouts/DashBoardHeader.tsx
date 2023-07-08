// components
import ThemeSwitch from "@/components/ThemeSwitch";

// content
import content from "@/content/en";

const fc = content.dashboard;

interface DashBoardHeaderProps {
  // add props here
}

function DashBoardHeader(props: DashBoardHeaderProps) {
  return (
    <header class="flex justify-between items-center p-5 border-b-2 border-b-black dark:bg-gray-900 dark:text-gray-100">
      <h2>{fc.title}</h2>
      <ThemeSwitch />
    </header>
  );
}

export default DashBoardHeader;
