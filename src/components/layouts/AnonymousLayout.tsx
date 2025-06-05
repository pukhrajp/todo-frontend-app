import { Outlet } from "react-router";

export function AnonymousLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
