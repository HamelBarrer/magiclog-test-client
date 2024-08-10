import { requestInterceptor } from './interceptor.http';

export const fetchAuthentication = async (
  url: string,
  options: RequestInit = {},
) => {
  let request = new Request(url, options);
  request = requestInterceptor(request);

  return await fetch(request);
};
