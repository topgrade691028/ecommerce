export interface LoginProps {
  onClick: () => void;
  children: React.ReactNode;
}

export interface SignUpProps {
  isSignUp: boolean;
  toggleSignUp: () => void;
}

// Represents the user's state in the application
export interface UserProps {
  uid: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt?: string | null; // Optional timestamp for when the user was created
  updatedAt?: string | null; // Optional timestamp for when the user data was last updated
}

// Represents the login input form
export interface UserLoginProps {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  accessToken: string;
}

// Represents the registration form input
export interface UserRegisterProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
