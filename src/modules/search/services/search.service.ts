import { ENDPOINTS } from '../../../constants/endpoints.constant';
import { IProducts, IProvider } from '../types/search.type';

export const searchProductsService = async (providerId?: number[]) => {
  let url = ENDPOINTS.INVENTORY_CREATE;
  if (providerId) {
    url = `${ENDPOINTS.INVENTORY_CREATE}?provider=[${providerId}]`;
  }

  const response = await fetch(url);
  const dataJson = await response.json();

  return dataJson as IProducts[];
};

export const searchProvidersService = async () => {
  const response = await fetch(ENDPOINTS.INVENTORY_PROVIDERS);
  const dataJson = await response.json();

  return dataJson as IProvider[];
};
