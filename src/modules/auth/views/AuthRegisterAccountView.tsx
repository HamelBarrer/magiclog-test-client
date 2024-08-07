import AuthFormRegisterAccountMolecule from '../components/molecules/AuthFormRegisterAccountMolecule';

interface Props {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthRegisterAccountView({ setIsLogin }: Props) {
  return (
    <div>
      <h2 className="font-semibold text-3xl text-center">Crea una cuenta</h2>
      <AuthFormRegisterAccountMolecule setIsLogin={setIsLogin} />
    </div>
  );
}
