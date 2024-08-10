import { useEffect, useState } from 'react';
import { useStore } from '../../../store/store';
import SeachListNameProviderMolecule from '../components/molecules/SeachListNameProviderMolecule';
import SearchListProviderMolecule from '../components/molecules/SearchListProviderMolecule';
import {
  searchProductsService,
  searchProvidersService,
} from '../services/search.service';
import { IProducts, IProvider } from '../types/search.type';

export default function SearchView() {
  const { searchFilteredProviders } = useStore();

  const [providers, setProviders] = useState<IProvider[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);

  const handleProviderClick = async (providerId: number[]) => {
    const allProducts = await searchProductsService(
      providerId.length !== 0 ? providerId : undefined,
    );
    setProducts(allProducts);
  };

  useEffect(() => {
    searchProvidersService().then((data) => setProviders(data));
  }, []);

  useEffect(() => {
    searchProductsService().then((data) => setProducts(data));
  }, []);

  return (
    <section className="p-4">
      <h2 className="font-semibold text-2xl">Administrador</h2>
      <section className="grid [grid-template-columns:15rem_1fr] gap-4 mt-4">
        <section>
          <div className="flex items-center justify-between">
            <h6>Filtros</h6>
            <button>Borrar</button>
          </div>
          <SearchListProviderMolecule
            providers={providers}
            handleProviderClick={handleProviderClick}
          />
        </section>
        <section>
          <SeachListNameProviderMolecule
            searchFilteredProviders={searchFilteredProviders}
          />
          <section className="flex gap-4 mt-4">
            {products.map((product) => (
              <article
                key={product.productId}
                className="border-2 p-2 rounded-lg text-center"
              >
                <h6 className="font-bold text-2xl">{product.name}</h6>
                <p>{product.sku}</p>
                <p>${product.price}</p>
              </article>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}
