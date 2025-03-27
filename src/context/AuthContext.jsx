import { createContext, useContext, useState, useEffect } from "react";
import { axiosInstance } from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");
  const [loading, setLoading] = useState(false);

  const loginAction = async ({ email, userPassword }) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/auth/login", {
        email,
        password: userPassword,
      });

      if (response.data) {
        setUser({
          username: response.data.user.username,
          email: response.data.user.email,
        });
        setToken(response.data.token);
        localStorage.setItem("accessToken", response.data.token);
        setLoading(false);
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const signupAction = async ({ username, email, userPassword }) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/auth/register", {
        username,
        email,
        password: userPassword,
      });

      await loginAction({ email, userPassword });
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("accessToken");
  };

  const getUser = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const response = await axiosInstance.get("/auth/me");

      if (response.data) {
        setUser({
          username: response.data.user.username,
          email: response.data.user.email,
        });
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, user, loginAction, signupAction, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
