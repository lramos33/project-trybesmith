import ValidationError from '../../interfaces/validationError.interface';
import User from '../../interfaces/user.interface';

const validateUsername = (username: string) => {
  if (!username) {
    return { code: 400, message: 'Username is required' };
  }

  if (typeof username !== 'string') {
    return { code: 422, message: 'Username must be a string' };
  }

  if (username.length <= 2) {
    return { code: 422, message: 'Username must be longer than 2 characters' };
  }
};

const validateClasse = (classe: string) => {
  if (!classe) {
    return { code: 400, message: 'Classe is required' };
  }

  if (typeof classe !== 'string') {
    return { code: 422, message: 'Classe must be a string' };
  }

  if (classe.length <= 2) {
    return { code: 422, message: 'Classe must be longer than 2 characters' };
  }
};

const validateLevel = (level: number) => {
  if (level === undefined) {
    return { code: 400, message: 'Level is required' };
  }

  if (typeof level !== 'number') {
    return { code: 422, message: 'Level must be a number' };
  }

  if (level <= 0) {
    return { code: 422, message: 'Level must be greater than 0' };
  }
};

const validatePassword = (password: string) => {
  if (!password) {
    return { code: 400, message: 'Password is required' };
  }

  if (typeof password !== 'string') {
    return { code: 422, message: 'Password must be a string' };
  }

  if (password.length <= 7) {
    return { code: 422, message: 'Password must be longer than 7 characters' };
  }
};

const userValidation = (user: User): void | ValidationError => {
  const { username, classe, level, password } = user;
  const usernameError = validateUsername(username);
  if (usernameError) return usernameError;

  const classeError = validateClasse(classe);
  if (classeError) return classeError;

  const levelError = validateLevel(level);
  if (levelError) return levelError;

  const passwordError = validatePassword(password);
  if (passwordError) return passwordError;
};

export default userValidation;