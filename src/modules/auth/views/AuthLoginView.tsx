import AuthFormLoginMolecule from '../components/molecules/AuthFormLoginMolecule';

interface Props {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthLoginView({ setIsLogin }: Props) {
  return (
    <div>
      <h2 className="font-semibold text-3xl text-center">Iniciar sesión</h2>
      <AuthFormLoginMolecule setIsLogin={setIsLogin} />
    </div>
  );
}
