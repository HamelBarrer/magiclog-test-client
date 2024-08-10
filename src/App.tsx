import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppNavbarOrganism from './modules/app/components/organisms/AppNavbarOrganism';
import AppLayoutView from './modules/app/views/AppLayoutView';
import AuthLayoutView from './modules/auth/views/AuthLayoutView';
import CoreLoaderGlobalAtom from './modules/core/components/atoms/CoreLoaderGlobalAtom';
import InventoryCreateView from './modules/inventory/views/InventoryCreateView';
import InventoryLayoutView from './modules/inventory/views/InventoryLayoutView';
import InventoryView from './modules/inventory/views/InventoryView';
import SearchView from './modules/search/views/SearchView';
import { useStore } from './store/store';

export default function App() {
  const { authCurrentUser, authGetUser } = useStore();

  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    authGetUser();
  }, [authGetUser]);

  return (
    <>
      {authCurrentUser.userId === 1 ? (
        <CoreLoaderGlobalAtom />
      ) : (
        <BrowserRouter>
          <div className="wrapper">
            <AppNavbarOrganism setOpenModel={setOpenModel} />
            <main className="[grid-area:main] overflow-auto">
              <Routes>
                <Route path="/" element={<AppLayoutView />}>
                  <Route path="inventory" element={<InventoryLayoutView />}>
                    <Route index element={<InventoryView />} />
                    <Route path="create" element={<InventoryCreateView />} />
                  </Route>
                </Route>
                <Route path="/search" element={<SearchView />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      )}
      <AuthLayoutView openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
}
