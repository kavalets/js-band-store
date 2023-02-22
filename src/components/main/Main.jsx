import { Outlet } from 'react-router-dom';

export function Main() {
  return (
    <main className="main">
      <div className="wrapper">
        <Outlet />
      </div>
    </main>
  );
}
