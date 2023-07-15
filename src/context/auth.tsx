import Loading from "@/components/loading/loading";
import { apiUrls } from "@/constants";
import { Accessor, JSXElement, Show, createContext, createEffect, createResource, createSignal, useContext } from "solid-js";

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
  error: Accessor<string>;
  login: Login;
  logout: Logout;
};

const fetchUser = async () => {
  const response = await fetch(apiUrls.authUser, {
    method: "GET",
    credentials: "include"
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  return undefined;
};

const AuthProvider = (props: TAuthProviderProps) => {
  const [user, { refetch }] = createResource<AuthUser>(fetchUser);
  const [isAuth, setIsAuth] = createSignal<boolean>(false);
  const [error, setError] = createSignal<string>("");

  createEffect(() => {
    if (user()) {
      setIsAuth(true);
    }

    console.log(user.error);
  });

  const login: Login = async (username, password) => {
    try {
      const response = await fetch(apiUrls.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        setIsAuth(true);
        refetch();
        return;
      }

      if (response.status === 401) {
        const msg = await response.json();
        if (msg == "invalid_credentials") {
          setError("Invalid username or password");
        }
      }
    } catch (error) {
      // handle error
      setError("Something went wrong");
    }
  };

  const logout: Logout = async () => {
    try {
      const response = await fetch(apiUrls.logout, {
        method: "POST",
        credentials: "include"
      });

      if (response.ok) {
        setIsAuth(false);
        refetch();
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
    error,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={values}>
      <Show when={!user.loading} fallback={<Loading />}>
        {props.children}
      </Show>
    </AuthContext.Provider>
  );
};

const AuthContext = createContext<TAuthContext>(undefined);

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
