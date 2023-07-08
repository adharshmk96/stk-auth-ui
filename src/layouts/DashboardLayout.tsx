// lib
import { JSXElement } from "solid-js";

// components
import DashBoardHeader from "./DashBoardHeader";
import Footer from "./Footer";

interface DashboardLayoutProps {
  children: JSXElement;
}

function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <div class="flex flex-col dark:bg-gray-800 dark:text-gray-100 min-h-screen">
      <DashBoardHeader />
      <div class="p-5">{props.children}</div>
      <div class="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
