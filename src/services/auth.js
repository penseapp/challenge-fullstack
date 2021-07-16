export const isAuthenticated = () => localStorage.getItem('token') !== null;
export const getToken = () => localStorage.getItem('token');
export const getInfos = () => localStorage.getItem('user');
export const login = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};
export const logout = () => {
  localStorage.removeItem('token');
};
