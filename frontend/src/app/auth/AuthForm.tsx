import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ImageSec from './ImageSec';
import main_logo from '../../../public/furniro_assets/Meubel House_Logos-05.png';
import { useState } from 'react';
import Image from 'next/legacy/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthFormProps, textVariants, variants } from './constants';
import SignUpButton from '@/components/login/SignUpButton';

export const AuthForm = ({
  isSignUp,
  name,
  email,
  password,
  confirmPassword,
  toggleSignUp,
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
}: AuthFormProps) => {
  const [isImageLeft, setIsImageLeft] = useState(true);

  const handleToggle = () => {
    setIsImageLeft(!isImageLeft);
    toggleSignUp();
  };

  return (
    <Card className="w-[65%] h-fit flex rounded-none justify-between relative overflow-hidden">
      <ImageSec isImageLeft={isImageLeft} />
      <motion.div
        className="bg-white px-4 w-[38%] z-10"
        initial={{ x: '160%' }}
        animate={isImageLeft ? 'right' : 'left'}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <CardHeader>
          <CardTitle className="flex gap-4 items-center">
            <Image src={main_logo} alt="main_logo" width={64} height={48} />
            <div className="font-bold text-4xl text-wood">FURNIO</div>
          </CardTitle>
          <CardTitle className="text-sm font-light">
            Crafted for Comfort, Designed for You!
          </CardTitle>
          <CardTitle className="w-full font-medium text-2xl text-gray-700">
            {isSignUp ? 'Sign Up' : 'Login'}
          </CardTitle>
        </CardHeader>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CardContent>
            <div>
              {isSignUp && (
                <div className="pb-2">
                  <Label htmlFor="confirmPassword">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="pb-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="pb-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>
              {isSignUp && (
                <div className="pb-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center gap-3">
            <Button type={'submit'} className="w-full">
              {isSignUp ? 'Sign Up' : 'Login'}
            </Button>
            <div className="text-gray-600 h-[50px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isSignUp ? 'signup' : 'login'}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={textVariants}
                  transition={{ duration: 0.3 }}
                  className=""
                >
                  {isSignUp
                    ? 'Already have an account? '
                    : "Don't have an account? "}
                  <SignUpButton onClick={handleToggle}>
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </SignUpButton>
                </motion.div>
              </AnimatePresence>
            </div>
          </CardFooter>
        </form>
      </motion.div>
    </Card>
  );
};
