import { useState } from 'react';
import { useStore } from '../../../../store/store';
import { IProvider } from '../../types/search.type';

interface Props {
  providers: IProvider[];
  handleProviderClick: (providerIds: number[]) => Promise<void>;
}

export default function SearchListProviderMolecule({
  providers,
  handleProviderClick,
}: Props) {
  const { searchSetAddFilteredProviders, searchSetRemoveFilteredProviders } =
    useStore();

  const [providerChecked, setProviderChecked] = useState<number[]>([]);

  const handleCheckboxChange = (provider: IProvider, isChecked: boolean) => {
    setProviderChecked((prevChecked) => {
      let updatedChecked: number[] = [];
      if (isChecked) {
        searchSetAddFilteredProviders(provider);
        updatedChecked = [...prevChecked, provider.userId];
      } else {
        searchSetRemoveFilteredProviders(provider);
        updatedChecked = prevChecked.filter((id) => id !== provider.userId);
      }

      handleProviderClick(updatedChecked);

      return updatedChecked;
    });
  };

  return (
    <div>
      <h5>Proveedor</h5>
      <ul>
        {providers.map((provider) => (
          <li key={provider.userId}>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                onChange={(e) =>
                  handleCheckboxChange(provider, e.target.checked)
                }
              />
              {provider.name}
            </label>
          </li>
        ))}
      </ul>
      <div>Proveedores seleccionados: {providerChecked.length}</div>
    </div>
  );
}
