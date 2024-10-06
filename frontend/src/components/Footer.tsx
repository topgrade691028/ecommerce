import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { Facebook } from 'lucide-react';
import FacebookIcon from './facebookIcon';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <div className="py-10 w-full px-8 border-t-2 border-gray-300">
      <div className="container mx-auto flex justify-between font-medium text-lg items-center px-4 pb-8 pt-2 border-b-2 border-gray-300">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Furniro.</h1>
          <p className="font-light">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col gap-4 pb-2">
          <h3 className="text-gray-500">Links</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex flex-col gap-4 pb-2">
          <h2 className="text-gray-500">Help</h2>
          <a href="#">Payment Options</a>
          <a href="#">Returns</a>
          <a href="#">Shipping</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <h2 className="text-gray-700 text-xl font-medium">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center container mx-auto pt-5">
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  );
}
