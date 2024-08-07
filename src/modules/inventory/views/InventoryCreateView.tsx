import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes.constant';
import InventoryFormCreateOrganism from '../components/molecules/InventoryFormCreateOrganism';

export default function InventoryCreateView() {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <button
        onClick={() => {
          navigate(ROUTES.INVENTORY);
        }}
      >
        Regresar
      </button>
      <div className="h-full grid place-content-center">
        <h3 className="font-semibold text-2xl">Crear producto</h3>
        <InventoryFormCreateOrganism />
      </div>
    </div>
  );
}
