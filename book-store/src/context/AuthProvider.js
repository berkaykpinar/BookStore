import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [member, setMember] = useState({});
  const [admin, setAdmin] = useState({});
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, member, setMember, admin, setAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
