import ValidationError from '../../interfaces/validationError.interface';

const validateName = (name: string) => {
  if (!name) {
    return { code: 400, message: 'Name is required' };
  }

  if (typeof name !== 'string') {
    return { code: 422, message: 'Name must be a string' };
  }

  if (name.length <= 2) {
    return { code: 422, message: 'Name must be longer than 2 characters' };
  }
};

const validateAmount = (amount: string) => {
  if (!amount) {
    return { code: 400, message: 'Amount is required' };
  }

  if (typeof amount !== 'string') {
    return { code: 422, message: 'Amount must be a string' };
  }

  if (amount.length <= 2) {
    return { code: 422, message: 'Amount must be longer than 2 characters' };
  }
};

const productValidation = (name: string, amount: string): void | ValidationError => {
  const nameError = validateName(name);
  const amountError = validateAmount(amount);

  if (nameError) return nameError;
  if (amountError) return amountError;
};

export default productValidation;