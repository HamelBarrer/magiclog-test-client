import { useStore } from '../../../../store/store';

interface Props {
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppNavbarOrganism({ setOpenModel }: Props) {
  const { authCurrentUser } = useStore();

  const handleLogInClick = () => {
    setOpenModel(true);
  };

  return (
    <header className="[grid-area:navbar] content-center bg-[#eaebef]">
      <div className="flex items-center justify-between px-6">
        <span>Magiclog</span>
        <section className="flex gap-2">
          <p>{authCurrentUser.name}</p>
          {authCurrentUser.name === '' ? (
            <button onClick={handleLogInClick}>Inicia sesión</button>
          ) : null}
        </section>
      </div>
    </header>
  );
}
