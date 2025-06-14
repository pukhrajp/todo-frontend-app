import React from "react";
import { AuthContext } from "./auth-context";
import { myAxios, setAuthToken } from "../../../lib/axios";

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
          console.log("Current user:", response.data);
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching current user:", error);
          setLoading(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
