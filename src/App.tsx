import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayoutView from './modules/app/views/AppLayoutView';
import CoreLoaderGlobalAtom from './modules/core/components/atoms/CoreLoaderGlobalAtom';
import InventoryCreateView from './modules/inventory/views/InventoryCreateView';
import InventoryLayoutView from './modules/inventory/views/InventoryLayoutView';
import InventoryView from './modules/inventory/views/InventoryView';
import { useStore } from './store/store';

export default function App() {
  const { authCurrentUser, authGetUser } = useStore();

  useEffect(() => {
    authGetUser();
  }, [authGetUser]);

  return (
    <>
      {authCurrentUser.userId === 1 ? (
        <CoreLoaderGlobalAtom />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayoutView />}>
              <Route path="inventory" element={<InventoryLayoutView />}>
                <Route index element={<InventoryView />} />
                <Route path="create" element={<InventoryCreateView />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
