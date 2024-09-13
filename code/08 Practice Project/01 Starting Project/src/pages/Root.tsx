import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header id="main-header">
        <h1>Sessions</h1>
      </header>
      <Outlet />
    </>
  );
}
