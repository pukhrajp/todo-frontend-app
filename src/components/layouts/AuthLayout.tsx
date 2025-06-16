import { Outlet, useNavigate } from "react-router";

import { AuthUserPopover } from "../popovers/auth-user-popover";
import { useContext } from "react";
import { AuthContext } from "../providers/auth-provider/auth-context";

export function AuthLayout() {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!loading && !user) {
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-2 bg-primary text-white">
        <div>Todo</div>
        <div>
          <AuthUserPopover />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
