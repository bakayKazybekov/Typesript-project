export type RegisterFieldsType = {
  name: 'username' | 'password' | 'confirmPassword';
  placeholder: string;
  type: string;
};
export type AuthFieldsType = Omit<RegisterFieldsType, 'name'> & {
  name: 'username' | 'password';
};

export type createProductFieldsType = {
  name: 'title' | 'description' | 'price';
  placeholder: string;
  type: string;
};

export type valuesType = {
  title: string;
  description: string;
  price: string;
};

export type SetValuesAction = {
  type: 'SET_VALUES';
  payload: Partial<valuesType>;
};

export type ResetFormAction = {
  type: 'RESET_FORM';
};

export type valuesAction = SetValuesAction | ResetFormAction;
