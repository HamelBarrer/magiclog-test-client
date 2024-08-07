import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AuthLayoutView from '../../auth/views/AuthLayoutView';
import AppNavbarOrganism from '../components/organisms/AppNavbarOrganism';
import AppSidebarOrganism from '../components/organisms/AppSidebarOrganism';

export default function AppLayoutView() {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div className="wrapper">
        <AppNavbarOrganism setOpenModel={setOpenModel} />
        <AppSidebarOrganism />
        <main className="[grid-area:main]">
          <Outlet />
        </main>
      </div>
      <AuthLayoutView openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
}
