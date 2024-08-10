import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes.constant';
import CoreButtonAtom from '../../../core/components/atoms/CoreButtonAtom';
import { IProducts } from '../../../search/types/search.type';

interface Props {
  products: IProducts[];
}

export default function InventoryTableOrganism({ products }: Props) {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-x-auto flex flex-col items-end gap-8">
      <CoreButtonAtom
        onClick={() => {
          navigate(ROUTES.INVENTORY_CREATE);
        }}
      >
        Crear producto
      </CoreButtonAtom>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre del producto
            </th>
            <th scope="col" className="px-6 py-3">
              Sku
            </th>
            <th scope="col" className="px-6 py-3">
              Cantidad
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.productId}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">{product.sku}</td>
              <td className="px-6 py-4">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
