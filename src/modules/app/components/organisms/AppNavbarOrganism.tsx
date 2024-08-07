interface Props {
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppNavbarOrganism({ setOpenModel }: Props) {
  const handleLogInClick = () => {
    setOpenModel(true);
  };

  return (
    <header className="[grid-area:navbar] content-center bg-[#eaebef]">
      <div className="flex items-center justify-between px-6">
        <span>Magiclog</span>
        <button onClick={handleLogInClick}>Inicia sesión</button>
      </div>
    </header>
  );
}
