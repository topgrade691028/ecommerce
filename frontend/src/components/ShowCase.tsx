import Living from '../../public/furniro_assets/Living1.png';
import Image from 'next/legacy/image';
import CustomSlider from './CustomSlider';

export default function ShowCase() {
  return (
    <div className="w-full bg-[#FCF8F3] py-5 my-5 flex items-center justify-between pl-16 relative">
      <div className="container mx-auto px-4 font-poppins">
        <h1 className="text-3xl font-bold text-left py-3">
          50+ Beautiful rooms inspiration
        </h1>
        <h3 className="text-left text-lg text-gray-500 py-3">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </h3>
        <button className="bg-wood text-white px-6 py-3">Explore More</button>
      </div>
      <div className="container mx-auto px-4 relative">
        <Image className="relative" src={Living} alt="showcase" />
        <div className="px-8 py-4 bg-white/70 absolute bottom-5 left-10">
          <h1 className="text-sm">01 -- bedroom</h1>
          <h2 className="text-xl font-bold">Inner Peace</h2>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <CustomSlider />
      </div>
    </div>
  );
}
