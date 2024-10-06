'use client';

import { LoginProps } from '@/lib/login';
import React, { useState } from 'react';

const SignUpButton = ({ onClick, children }: LoginProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <span className="text-wood hover:cursor-pointer" onClick={handleClick}>
      {children}
    </span>
  );
};

export default SignUpButton;
