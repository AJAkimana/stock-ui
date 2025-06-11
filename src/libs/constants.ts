export const currentYear = new Date().getFullYear();
export const lStorage = {
  token: localStorage.getItem('user-token') || '',
};
