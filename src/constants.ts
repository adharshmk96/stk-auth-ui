export default {
  DARK_MODE: "dark",
  LIGHT_MODE: "light"
};

export const basePath = "";
export const apiServerUrl = "http://localhost:8080";

export const pageUrls = {
  home: `${basePath}/`,
  dashboard: `${basePath}/dashboard`,
  users: `${basePath}/dashboard/users`,
  login: `${basePath}/login`,
}

export const apiUrls = {
  login: `${apiServerUrl}/api/auth/session/login`,
  logout: `${apiServerUrl}/api/auth/logout`,
  authUser: `${apiServerUrl}/api/auth/session/user`,
  users: `${apiServerUrl}/api/admin/users`,
}