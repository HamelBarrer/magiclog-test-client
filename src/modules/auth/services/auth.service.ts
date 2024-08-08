import { ENDPOINTS } from '../../../constants/endpoints.constant';
import { IAuth, IAuthenticatedUser, IRegister } from '../types/auth.type';

export const authLoginService = async (data: IAuth) => {
  const response = await fetch(ENDPOINTS.AUTH_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataJson = await response.json();

  return dataJson as IAuthenticatedUser;
};

export const authRegisterService = async (data: IRegister) => {
  const response = await fetch(ENDPOINTS.AUTH_REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataJson = await response.json();

  return dataJson as IAuthenticatedUser;
};
