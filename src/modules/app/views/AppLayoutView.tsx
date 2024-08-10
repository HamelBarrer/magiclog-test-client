import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes.constant';
import { useStore } from '../../../store/store';
import AppSidebarOrganism from '../components/organisms/AppSidebarOrganism';

export default function AppLayoutView() {
  const { authCurrentUser } = useStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (authCurrentUser.userId !== 0) {
      navigate(ROUTES.INVENTORY);
    }
  }, [authCurrentUser.userId, navigate]);

  return (
    <>
      <div className="wrapper__inventory">
        <AppSidebarOrganism />
        <main className="[grid-area:main] overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}
