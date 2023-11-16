export const errorsText = {
  email: '*Email cannot be blank',
  password: '*Password cannot be blank',
  confirm: '*Confirm cannot be blank',
  invalidEmail: '*Enter correct email',
  invalidPasswordSignUp:
    '*Minimum 8 symbols, at least one letter, one digit, one special character',
  noConfirm: '*The password must match'
};

export enum ErrorsType {
  REQUIRED = 'required',
  PATTERN = 'pattern'
}