import { Outlet } from "react-router";

export function RootLayout() {
  return (
    <div>
      <main>
        {/* This is where child routes will be rendered */}
        <div id="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
