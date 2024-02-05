import { valuesAction, valuesType } from './types';

export const initialValues: valuesType = {
  title: '',
  description: '',
  price: '',
};

export const formReducer = (state: valuesType, action: valuesAction) => {
  switch (action.type) {
    case 'SET_VALUES':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_FORM':
      return initialValues;
    default:
      return state;
  }
};
