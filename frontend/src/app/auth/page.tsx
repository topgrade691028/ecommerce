'use client';

import React, { useState } from 'react';
import Auth from './Auth';

const AuthWrapper = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return <Auth isSignUp={isSignUp} toggleSignUp={toggleSignUp} />;
};

export default AuthWrapper;
