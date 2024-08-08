export interface IAuth {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IAuthenticatedUser {
  userId: number;
  name: string;
  email: string;
  token: string;
}
