import React from "react";

export const AuthContext = React.createContext({
  user: null,
  setUser: (user: any) => {},
  loading: true,
});
