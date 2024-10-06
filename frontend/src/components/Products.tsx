import ProductCard from './ProductCard';

export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <div className="container mx-auto py-7">
        <ProductCard
          imageUrl="/furniro_assets/bedroom1.png"
          productName="Product Name"
          productCategory="Product Category"
          currentPrice={100}
          originalPrice={150}
        />
      </div>
      <button className="font-medium text-wood border-2 border-wood py-2 px-16">
        Show more
      </button>
    </div>
  );
}
