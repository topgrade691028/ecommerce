export type RegisterRequestDto = {
  first_name: string; // only this is required
  email: string; // only this is required
  password: string; // only this is required
  last_name?: string;
  image?: string;
  isActive?: boolean;
  isVerified?: boolean;
};
