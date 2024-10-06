export const variants = {
  left: { x: 0 },
  right: { x: '160%' },
};

export const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export interface AuthFormProps {
  isSignUp: boolean;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  toggleSignUp: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  setName: (e: string) => void;
  setEmail: (e: string) => void;
  setPassword: (e: string) => void;
  setConfirmPassword: (e: string) => void;
}
