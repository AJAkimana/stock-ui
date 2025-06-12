import type { AFormField } from '../../components/AForm';

export const loginSchema = () => [
  [
    {
      name: 'email',
      label: 'Email address',
      size: 'medium',
      autoComplete: 'email',
      autoFocus: true,
    },
  ] as AFormField[],
  [
    {
      name: 'password',
      fieldType: 'password',
      label: 'Password',
      autoComplete: 'current-password',
      size: 'medium',
    },
  ] as AFormField[],
];
