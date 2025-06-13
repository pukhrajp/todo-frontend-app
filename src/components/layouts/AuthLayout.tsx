import { Outlet } from "react-router";

import { AuthUserPopover } from "../popovers/auth-user-popover";

export function AuthLayout() {
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
