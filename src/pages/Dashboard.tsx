import { useAuth } from "@/context/auth";
import DashboardLayout from "@/layouts/DashboardLayout";
import { createEffect } from "solid-js";

interface DashboardProps {
  // add props here
}

function Dashboard(props: DashboardProps) {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <h2 class="text-xl" >Welcome {user()?.username}</h2>
    </DashboardLayout>
  );
}

export default Dashboard;
