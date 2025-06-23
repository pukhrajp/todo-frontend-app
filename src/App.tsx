import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { AuthProvider } from "./components/providers/auth-provider/auth-provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          {/* <Counter /> */}
          <RouterProvider router={routes} />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
