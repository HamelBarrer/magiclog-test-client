import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes.constant';

export default function AppSidebarOrganism() {
  return (
    <aside className="[grid-area:sidebar] border-r">
      <nav className="p-6">
        <ul>
          <li>
            <NavLink to={ROUTES.INVENTORY}>Inventario</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
