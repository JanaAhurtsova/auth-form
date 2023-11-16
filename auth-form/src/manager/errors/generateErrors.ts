export const generateError = (type: 'required' | 'pattern', message: string) => ({
  type,
  message,
});