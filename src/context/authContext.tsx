import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { IUserContext, IUserData } from "@interfaces/dataInterfaces";
import axios from "axios";

export const AuthContext = createContext<IUserContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within the context");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      await getUserData();
    };
    fetchUser();
  }, []);
  const login = async (email: string, password: string) => {
    try {
      await axios.post(
        "http://localhost:3001/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      await getUserData();
    } catch {
      setUser(null);
    }
  };

  const logout = async () => {
    setUser(null);
    // TODO: napisać enpoint logout (wyczyscic ciasteczko)
  };

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/loggedUser", {
        withCredentials: true,
      });
      if (!response) {
        setUser(null);
        return;
      }
      const user = response.data;
      console.log("@@@@@@@@@@@@@@@@@@@@@@@", user);
      setUser({ id: user.id, email: user.email, name: user.name });
    } catch {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
