export const baseURL = import.meta.env.DEV ? '/api' : import.meta.env.VITE_API_HOST;
export const taskURL = baseURL + '/tasks';
