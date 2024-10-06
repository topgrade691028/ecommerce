import React, { useEffect, useState } from 'react';
import { SignUpProps } from '@/lib/login';
import {
  useLoginMutation,
  useSignUpMutation,
} from '@/lib/store/service/loginQuery';
import { AlertDestructive } from '@/components/login/Alert';
import Spinner from '@/components/login/Spinner';
import { AuthForm } from './AuthForm';
import { useRouter } from 'next/navigation';

export default function Auth({ isSignUp, toggleSignUp }: SignUpProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [showLoginError, setShowLoginError] = useState<boolean>(false);
  const [passwordMismatchError, setPasswordMismatchError] =
    useState<boolean>(false);
  const [spinnerload, setSpinnerLoad] = useState<boolean>(false);
  const [showSignupError, setShowSignupError] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [
    login,
    { isLoading: isLoginLoading, isError: isLoginError, error: loginError },
  ] = useLoginMutation();
  const [
    signUp,
    { isLoading: isSignupLoading, isError: isSignupError, error: signupError },
  ] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let result;
      if (isSignUp) {
        // Call the sign-up mutation
        if (password !== confirmPassword) {
          setPasswordMismatchError(true); // Set the password mismatch error state
          return;
        }
        const credentials = {
          first_name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        };
        result = await signUp(credentials).unwrap();
      } else {
        // Call the login mutation
        const credentials = {
          email: email,
          password: password,
        };
        result = await login(credentials).unwrap();
      }
      if (result.access_token) {
        // Handle successful login/signup
        // save the token in local storage
        localStorage.setItem('token', result.access_token);

        setSpinnerLoad(true);
        setTimeout(() => {
          setSpinnerLoad(false); // Hide spinner after 5 seconds
          setIsAuthenticated(true); // Set authenticated to true after spinner load
        }, 5000);
      }
    } catch (err) {
      console.error('Failed to authenticate:', err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const getErrorMessage = (error: any) => {
    if (error && 'data' in error) {
      if (error.data.message) {
        return error.data.message;
      }
      return typeof error.data === 'string' ? error.data : 'An error occurred';
    }
    return 'An error occurred';
  };

  useEffect(() => {
    if (isLoginError) {
      setShowLoginError(true);
      const timer = setTimeout(() => {
        setShowLoginError(false);
      }, 1500); // 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [isLoginError]);

  useEffect(() => {
    if (isSignupError) {
      setShowSignupError(true);
      const timer = setTimeout(() => {
        setShowSignupError(false);
      }, 1500); // 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [isSignupError]);

  useEffect(() => {
    if (passwordMismatchError) {
      const timer = setTimeout(() => {
        setPasswordMismatchError(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [passwordMismatchError]);

  return (
    <main className="w-full h-screen bg-[#fffefb] flex justify-center items-center overflow-hidden">
      {showLoginError && (
        <AlertDestructive error={getErrorMessage(loginError)} />
      )}
      {showSignupError && (
        <AlertDestructive error={getErrorMessage(signupError)} />
      )}
      {passwordMismatchError && (
        <AlertDestructive error="Passwords do not match" />
      )}
      {(isLoginLoading || isSignupLoading) && <Spinner />}
      <AuthForm
        isSignUp={isSignUp}
        toggleSignUp={toggleSignUp}
        {...{
          name,
          email,
          password,
          confirmPassword,
          handleSubmit,
          setName,
          setEmail,
          setPassword,
          setConfirmPassword,
        }}
      />
    </main>
  );
}
