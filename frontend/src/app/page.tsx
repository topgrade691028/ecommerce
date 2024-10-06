import Category from '@/components/Category';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import HeroSec from '@/components/HeroSec';
import NavBar from '@/components/NavBar';
import Products from '@/components/Products';
import ShowCase from '@/components/ShowCase';

export default function Home() {
  return (
    <div className="bg-white flex flex-col font-poppins items-center justify-center">
      <NavBar />
      <HeroSec />
      <Category />
      <Products />
      <ShowCase />
      <Gallery />
      <Footer />
    </div>
  );
}
