import { createBrowserRouter } from "react-router";
import { RootLayout } from "../components/layouts/RootLayout";
import { Home } from "../components/pages/home/home";

import { Todos } from "../components/pages/todos";

import { AuthLayout } from "../components/layouts/AuthLayout";
import { Signup } from "../components/pages/signup";
import { AnonymousLayout } from "../components/layouts/AnonymousLayout";
import { Login } from "../components/pages/login";
import { AccountVerification } from "../components/pages/account-verification";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: AuthLayout,
        children: [
          { index: true, Component: Home },
          { path: "todos", Component: Todos },
          { path: "account-verification", Component: AccountVerification }, // Placeholder for account verification
        ],
      },
      {
        Component: AnonymousLayout,
        children: [
          { path: "signup", Component: Signup },
          { path: "login", Component: Login },
        ],
      },
    ],
  },
]);
