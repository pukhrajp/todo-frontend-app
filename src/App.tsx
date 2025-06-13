import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { setAuthToken } from "./lib/axios";

function App() {
  const token = localStorage.getItem("token");
  setAuthToken(token);

  return <RouterProvider router={routes} />;
}

export default App;
