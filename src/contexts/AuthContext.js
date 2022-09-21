import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as authService from "../api/authApi";
// import Spinner from "../components/ui/Spinner";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from "../utils/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe();
        }
      } catch (err) {
        console.log(err);
        toast.err("Error");
      } finally {
        setInitialLoading(false);
      }
    };
    fetchMe();
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authService.register(input);
    // setTimeout(() => setUser(true), 1); //เอาModalออก
    // setUser(true)
    // localStorage.setItem('token', res.data.token)
    addAccessToken(res.data.token);
    setTimeout(() => getMe(), 1); //เอาModalออก
  };
  const login = async (input) => {
    const res = await authService.login(input);
    // setUser(true);
    addAccessToken(res.data.token);
    await getMe();
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  // if (initialLoading) return <Spinner />;

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
