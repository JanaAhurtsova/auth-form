export interface FormValues {
  email: string;
  password: string;
  confirm?: string;
}

export type ErrorType = {
  [PropertyKey in keyof FormValues]: {
    type: string;
    message: string;
  };
};
