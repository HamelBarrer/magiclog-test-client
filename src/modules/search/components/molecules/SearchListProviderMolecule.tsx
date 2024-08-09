import { IProvider } from '../../types/search.type';

interface Props {
  providers: IProvider[];
  handleProviderClick: (provider: IProvider) => Promise<void>;
}

export default function SearchListProviderMolecule({
  providers,
  handleProviderClick,
}: Props) {
  return (
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
  );
}
