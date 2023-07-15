import { Route, Router, Routes } from "@solidjs/router";
import UserList from "./pages/UserList";

// Pages
import { pageUrls } from "./constants";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
// const Login = lazy(() => import("@/pages/Login"));
// const Dashboard = lazy(() => import("@/pages/Dashboard"));

const Routing = () => (
  <Router>
    <Routes>
      <Route path={pageUrls.home} element={<Login />} />

      <Route path={pageUrls.dashboard} element={<Dashboard />} />

      <Route path={pageUrls.users} element={<UserList />} />
    </Routes>
  </Router>
);

export default Routing;
