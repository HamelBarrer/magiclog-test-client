import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayoutView from './modules/app/views/AppLayoutView';
import InventoryCreateView from './modules/inventory/views/InventoryCreateView';
import InventoryLayoutView from './modules/inventory/views/InventoryLayoutView';
import InventoryView from './modules/inventory/views/InventoryView';

export default function App() {
  return (
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
  );
}
