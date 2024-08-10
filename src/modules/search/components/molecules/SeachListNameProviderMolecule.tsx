import { useStore } from '../../../../store/store';
import CoreCloseIcon from '../../../core/icons/CoreCloseIcon';
import { IProvider } from '../../types/search.type';

interface Props {
  searchFilteredProviders: IProvider[];
}

export default function SeachListNameProviderMolecule({
  searchFilteredProviders,
}: Props) {
  const { searchSetRemoveFilteredProviders } = useStore();

  return (
    <>
      {searchFilteredProviders.length > 0 ? (
        <section className="flex gap-4">
          {searchFilteredProviders.map((provider) => (
            <div
              key={provider.userId}
              className="flex items-center bg-[#f8faf9] p-2 border rounded-sm"
            >
              {provider.name}
              <button
                onClick={() => {
                  searchSetRemoveFilteredProviders(provider);
                }}
              >
                <CoreCloseIcon />
              </button>
            </div>
          ))}
        </section>
      ) : null}
    </>
  );
}
