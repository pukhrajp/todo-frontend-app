import { Outlet, useNavigate } from "react-router";

import { useAuth } from "../providers/auth-provider/hook";

export function AnonymousLayout() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }
  if (user) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
