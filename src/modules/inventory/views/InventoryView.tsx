import { useEffect, useState } from 'react';
import CoreLoaderGlobalAtom from '../../core/components/atoms/CoreLoaderGlobalAtom';
import { searchProductsService } from '../../search/services/search.service';
import { IProducts } from '../../search/types/search.type';
import InventoryEmptyOrganism from '../components/organisms/InventoryEmptyOrganism';
import InventoryTableOrganism from '../components/organisms/InventoryTableOrganism';

export default function InventoryView() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    searchProductsService().then((data) => {
      setProducts(data);
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <CoreLoaderGlobalAtom />}
      {!isLoading && (
        <>
          {products.length === 0 ? (
            <InventoryEmptyOrganism />
          ) : (
            <InventoryTableOrganism products={products} />
          )}
        </>
      )}
    </>
  );
}
