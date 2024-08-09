import { useEffect, useState } from 'react';
import {
  searchProductsService,
  searchProvidersService,
} from '../services/search.service';
import { IProducts, IProvider } from '../types/search.type';

export default function SearchView() {
  const [providers, setProviders] = useState<IProvider[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);

  const handleProviderClick = async (provider: IProvider) => {
    const allProducts = await searchProductsService(provider.userId);
    setProducts(allProducts);
  };

  useEffect(() => {
    searchProvidersService().then((data) => setProviders(data));
  }, []);

  useEffect(() => {
    searchProductsService().then((data) => setProducts(data));
  }, []);

  return (
    <section className="grid [grid-template-columns:15rem_1fr] gap-4">
      <section>
        <div className="flex items-center justify-between">
          <h6>Filtros</h6>
          <button>Borrar</button>
        </div>
        <ul>
          <h5>Proveedor</h5>
          {providers.map((provider) => (
            <li key={provider.userId}>
              <label>
                <input
                  type="checkbox"
                  onClick={() => handleProviderClick(provider)}
                />
                {provider.name}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex gap-4">
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
  );
}
