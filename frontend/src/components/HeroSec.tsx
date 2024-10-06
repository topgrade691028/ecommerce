import Image from 'next/legacy/image';
import main_bg from '../../public/furniro_assets/scandinavian-interior-mockup-wall-decal-background 1.png';

export default function HeroSec() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Image
        src={main_bg}
        alt="main_bg"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="relative z-10 bg-[#FFF3E3] w-full max-w-md mx-auto md:mx-0 md:ml-auto md:mr-24 p-6 rounded-xl">
        <h3 className="text-sm tracking-wider">New Arrival</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-[#B88E2F] mt-4">
          Discover Our New Collection
        </h1>
        <p className="font-normal my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] w-full md:w-48 py-4 text-white">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
