export interface FormValues {
  email: string;
  password: string;
  confirm?: string;
}

export type ErrorsEmail = {
  type: string;
  message: string;
};

export type ErrorsForm = {
  [PropertyKey in keyof FormValues]: {
    type: string;
    message: string;
  };
};