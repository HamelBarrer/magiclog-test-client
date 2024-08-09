import { StateCreator } from 'zustand';
import { LOCALSTORAGE } from '../../../constants/app.constant';
import { IAuthenticatedUser } from '../../auth/types/auth.type';

export interface AuthSlice {
  authCurrentUser: IAuthenticatedUser;
  authSetUser: (data: IAuthenticatedUser) => void;
  authGetUser: () => void;
  authClearUser: () => void;
}

const initialCurrentUser = {
  userId: 0,
  name: '',
  email: '',
  token: '',
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  authCurrentUser: initialCurrentUser,

  authSetUser: (data: IAuthenticatedUser) => {
    set(() => ({ authCurrentUser: data }));
    localStorage.setItem(LOCALSTORAGE.AUTHENTICATED_USER, JSON.stringify(data));
  },

  authGetUser: () => {
    const storage = localStorage.getItem(LOCALSTORAGE.AUTHENTICATED_USER);
    if (storage) {
      const data = JSON.parse(storage);
      set(() => ({ authCurrentUser: data }));
    }
  },

  authClearUser: () => {
    set(() => ({ authCurrentUser: initialCurrentUser }));
    localStorage.removeItem(LOCALSTORAGE.AUTHENTICATED_USER);
  },
});
