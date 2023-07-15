import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import UserList from "./pages/UserList";
import AuthProvider from "./context/auth";

// Pages
const Login = lazy(() => import("@/pages/Login"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));

const Routing = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/dashboard/users" element={<UserList />} />
    </Routes>
  </Router>
);

export default Routing;
