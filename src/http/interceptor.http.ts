import { useStore } from '../store/store';

export const requestInterceptor = (request: Request) => {
  const token = useStore.getState().authCurrentUser.token;

  request.headers.append('Authorization', `Bearer ${token}`);
  return request;
};
