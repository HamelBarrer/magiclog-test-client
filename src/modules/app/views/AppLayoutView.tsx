import { Outlet } from 'react-router-dom';
import AppNavbarOrganism from '../components/organisms/AppNavbarOrganism';
import AppSidebarOrganism from '../components/organisms/AppSidebarOrganism';

export default function AppLayoutView() {
  return (
    <div className="wrapper">
      <AppNavbarOrganism />
      <AppSidebarOrganism />
      <main className="[grid-area:main]">
        <Outlet />
      </main>
    </div>
  );
}
