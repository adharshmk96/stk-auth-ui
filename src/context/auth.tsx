import { AUTH_SERVER_URL } from "@/config";
import { Accessor, JSXElement, Setter, createContext, createSignal, onMount, useContext } from "solid-js";

type TAuthProviderProps = {
  children: JSXElement;
};

type AuthUser = {
  id: string;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
};

type Login = (username: string, password: string) => Promise<void>;
type Logout = () => Promise<void>;

type TAuthContext = {
  isAuth: Accessor<boolean>;
  user: Accessor<AuthUser>;
  loading: Accessor<boolean>;
  error: Accessor<string>;
  login: Login;
  logout: Logout;
};

const AuthProvider = (props: TAuthProviderProps) => {
  const [isAuth, setIsAuth] = createSignal<boolean>(false);
  const [user, setUser] = createSignal<AuthUser>();
  const [error, setError] = createSignal<string>("");
  const [loading, setLoading] = createSignal<boolean>(false);

  onMount(async () => {
    const response = await fetch(`${AUTH_SERVER_URL}/api/auth/session/user`, {
      method: "GET",
      credentials: "include"
    });

    if (response.ok) {
      const data = await response.json();
      setIsAuth(true);
      setUser(data);
    }

    setLoading(false);
  });

  const login: Login = async (username, password) => {
    try {
      const response = await fetch(`${AUTH_SERVER_URL}/api/auth/session/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();        
        setUser(data);
        setIsAuth(true);
        return;
      }

      if (response.status === 401) {
        setError("Invalid username or password");
      }
    } catch (error) {
      // handle error
      setError("Something went wrong");
    }
  };

  const logout: Logout = async () => {
    try {
      const response = await fetch(`${AUTH_SERVER_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include"
      });

      if (response.ok) {
        setUser(undefined);
        setIsAuth(false);
        return;
      }

      if (response.status === 401) {
        setError("Invalid username or password");
      }
    } catch (error) {
      // handle error
      setError("Something went wrong");
    }
  };

  const values: TAuthContext = {
    isAuth,
    user,
    loading,
    error,
    login,
    logout
  };

  return <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>;
};

const AuthContext = createContext<TAuthContext>(undefined);

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
