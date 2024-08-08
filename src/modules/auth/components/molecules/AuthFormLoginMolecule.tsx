import { useState } from 'react';
import { authLoginService } from '../../services/auth.service';
import AuthButtonAtom from '../atoms/AuthButtonAtom';
import AuthButtonLineAtom from '../atoms/AuthButtonLineAtom';
import AuthInputAtom from '../atoms/AuthInputAtom';
import AuthLabelAtom from '../atoms/AuthLabelAtom';

interface Props {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthFormLoginMolecule({ setIsLogin }: Props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authLoginService(form);
  };

  return (
    <form className="mt-12 flex flex-col gap-4" onSubmit={handleSubmit}>
      <AuthLabelAtom>
        Correo
        <AuthInputAtom
          type="email"
          autoComplete="username"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </AuthLabelAtom>
      <AuthLabelAtom>
        Contraseña
        <AuthInputAtom
          type="password"
          autoComplete="new-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </AuthLabelAtom>
      <div className="flex flex-col items-center gap-1 mt-4">
        <AuthButtonAtom type="submit">Acceder</AuthButtonAtom>
        <AuthButtonLineAtom
          onClick={() => {
            setIsLogin(false);
          }}
        >
          Registrarse
        </AuthButtonLineAtom>
      </div>
    </form>
  );
}
