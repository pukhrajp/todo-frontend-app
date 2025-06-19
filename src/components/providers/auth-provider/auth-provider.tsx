import React from "react";
import { AuthContext } from "./auth-context";
import { myAxios, setAuthToken } from "../../../lib/axios";
import { set } from "react-hook-form";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      myAxios
        .get("/current-user")
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setAuthToken(null);
        });
    } else {
      setLoading(false);
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
