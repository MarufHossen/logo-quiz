import { restApi } from '../api/calls';

export async function login(email: string, password: string) {
  const payload = await restApi.post('/auth/token', {
    email,
    password
  });
  const jwt = payload.data.token;
  localStorage.setItem('jwt', JSON.stringify(jwt));
  return jwt;
}

export function signup(email: string, password: string) {
  return restApi.post('/users', {
    email,
    password
  });
}
