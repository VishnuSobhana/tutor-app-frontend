import { createContext, useState, useEffect } from "react";
import myApi from "./../service/service";
export const AuthContext = createContext();

function AuthContextWrapper(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function storeToken(receivedToken) {
    localStorage.setItem("token", receivedToken);
    setToken(receivedToken);
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function removeToken() {
    localStorage.removeItem("token");
  }

  async function authenticateUser() {
    try {
      const currentToken = getToken();
      setToken(currentToken);
      // if (!currentToken) return setUser(null);

      const response = await myApi.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });
      if (response.status === 200) {
        setUser(response.data);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeToken, user, authenticateUser, removeToken, isLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextWrapper;
