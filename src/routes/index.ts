import { createBrowserRouter } from "react-router";
import { RootLayout } from "../components/layouts/RootLayout";
import { Home } from "../components/pages/home/home";

import { Todos } from "../components/pages/todos";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "todos", Component: Todos },
    ],
  },
]);
