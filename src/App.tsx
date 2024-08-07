import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayoutView from './modules/app/views/AppLayoutView';
import InventoryLayoutView from './modules/inventory/views/InventoryLayoutView';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayoutView />}>
          <Route path="inventory" element={<InventoryLayoutView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
