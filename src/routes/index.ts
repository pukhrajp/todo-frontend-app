import { createBrowserRouter } from "react-router";
import { RootLayout } from "../components/layouts/RootLayout";
import { Home } from "../components/pages/home/home";

import { Todos } from "../components/pages/todos";

import { AuthLayout } from "../components/layouts/AuthLayout";
import { Signup } from "../components/pages/signup";
import { AnonymousLayout } from "../components/layouts/AnonymousLayout";
import { Login } from "../components/pages/login";
import { AccountVerification } from "../components/pages/account-verification";
import { MyTeam } from "../components/pages/my-team";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: AuthLayout,
        children: [
          { index: true, Component: Todos },
          { path: "my-team", Component: MyTeam },

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
