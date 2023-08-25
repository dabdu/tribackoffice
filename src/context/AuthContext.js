import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [isMessage, setIsMessage] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [messageContent, setMessageContent] = useState("");
  useEffect(() => {}, []);

  async function fetchDetails() {
    const tempUser = JSON.parse(localStorage.getItem("authUser"));
    const tempToken = localStorage.getItem("token");
    setAuthUser(tempUser);
    setAuthToken(tempToken);
  }
  useEffect(() => {
    fetchDetails();
  }, []);

  console.log(authToken, authUser);
  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        authUser,
        setAuthUser,
        fetchDetails,
        isMessage,
        setIsMessage,
        messageType,
        setMessageType,
        messageContent,
        setMessageContent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
