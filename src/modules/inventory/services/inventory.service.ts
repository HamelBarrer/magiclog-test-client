import { ENDPOINTS } from '../../../constants/endpoints.constant';
import { IInventory, IInventoryCreate } from '../types/inventory.type';

export const inventoryCreateService = async (
  data: IInventoryCreate,
  token: string,
) => {
  const response = await fetch(ENDPOINTS.INVENTORY_CREATE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const dataJson = await response.json();

  return dataJson as IInventory;
};
