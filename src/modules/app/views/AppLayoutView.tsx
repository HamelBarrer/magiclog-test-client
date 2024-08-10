import { Outlet } from 'react-router-dom';
import AppSidebarOrganism from '../components/organisms/AppSidebarOrganism';

export default function AppLayoutView() {
  return (
    <>
      <div className="wrapper">
        <AppSidebarOrganism />
        <main className="[grid-area:main] overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}
