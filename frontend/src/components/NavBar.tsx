'use client';
import Image from 'next/legacy/image';
import main_logo from '../../public/furniro_assets/Meubel House_Logos-05.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Search, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { Button } from '@/components/ui/button';

const MenuProps = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Shop',
    href: '/shop',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function NavBar() {
  const userData = useSelector((state: RootState) => state.user);

  return (
    <div className="w-full flex items-center justify-between py-4 px-2 md:px-16">
      {/* logo */}
      <div className="flex gap-1">
        <Image src={main_logo} alt="main_logo" className="w-12 h-8" />
        <h1 className="font-mono font-bold text-3xl">Furniro</h1>
      </div>
      {/* menu */}
      <div className="hidden md:flex gap-4 gap-x-16 font-medium">
        {MenuProps.map((item) => (
          <a href={item.href} className="relative group" key={item.name}>
            <span className="relative">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B88E2F] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        ))}
      </div>
      {/* icons */}
      <div className="flex items-center justify-center gap-[3vw]">
        {userData.uid !== '' ? (
          <Link href="/auth">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Link href="/auth">
            <Button variant={'default'} className="bg-wood hover:bg-yellow-700">
              Login
            </Button>
          </Link>
        )}
        <Search />
        <Heart />
        <ShoppingCartIcon />
      </div>
    </div>
  );
}
