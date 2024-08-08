import { useState } from 'react';
import { authRegisterService } from '../../services/auth.service';
import AuthButtonAtom from '../atoms/AuthButtonAtom';
import AuthButtonLineAtom from '../atoms/AuthButtonLineAtom';
import AuthInputAtom from '../atoms/AuthInputAtom';
import AuthLabelAtom from '../atoms/AuthLabelAtom';

interface Props {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthFormRegisterAccountMolecule({ setIsLogin }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authRegisterService(form);
  };

  return (
    <form className="mt-12 flex flex-col gap-4" onSubmit={handleSubmit}>
      <AuthLabelAtom>
        Nombre
        <AuthInputAtom name="name" value={name} onChange={handleChange} />
      </AuthLabelAtom>
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
      <AuthLabelAtom>
        Confirmar contraseña
        <AuthInputAtom
          type="password"
          autoComplete="new-password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </AuthLabelAtom>
      <div className="flex flex-col items-center gap-1 mt-4">
        <AuthButtonAtom type="submit">Registrarse</AuthButtonAtom>
        <AuthButtonLineAtom
          onClick={() => {
            setIsLogin(true);
          }}
        >
          Inicia sesión
        </AuthButtonLineAtom>
      </div>
    </form>
  );
}
