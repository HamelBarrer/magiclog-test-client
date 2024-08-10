import { useState } from 'react';
import { IProvider } from '../../types/search.type';

interface Props {
  providers: IProvider[];
  handleProviderClick: (providerIds: number[]) => Promise<void>;
}

export default function SearchListProviderMolecule({
  providers,
  handleProviderClick,
}: Props) {
  const [providerChecked, setProviderChecked] = useState<number[]>([]);

  const handleCheckboxChange = (providerId: number, isChecked: boolean) => {
    setProviderChecked((prevChecked) => {
      const updatedChecked = isChecked
        ? [...prevChecked, providerId]
        : prevChecked.filter((id) => id !== providerId);

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
                  handleCheckboxChange(provider.userId, e.target.checked)
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
