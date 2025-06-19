import { Link, Outlet, useNavigate } from "react-router";

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-2 bg-primary text-white">
        <nav>
          <Link to="/" className="mr-4">
            Todos
          </Link>
          <Link to="/my-team" className="mr-4">
            My Team
          </Link>
        </nav>

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
