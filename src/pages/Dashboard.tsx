import { useAuth } from "@/context/auth";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Link } from "@solidjs/router";
import { Component } from "solid-js";

interface DashboardProps {
  // add props here
}

const Dashboard: Component<DashboardProps> = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <h2 class="text-xl" >Welcome {user()?.username}</h2>
      <Link href="/dashboard/users" class="btn btn-wide btn-primary">Users</Link>
    </DashboardLayout>
  );
}

export default Dashboard;
