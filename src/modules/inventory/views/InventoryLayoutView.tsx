import { Outlet } from 'react-router-dom';

export default function InventoryLayoutView() {
  return (
    <div className="p-6 h-full">
      <Outlet />
    </div>
  );
}
