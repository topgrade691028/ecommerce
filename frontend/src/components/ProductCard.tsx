import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GitCompareArrows, Heart, Share2 } from 'lucide-react';
import Image from 'next/legacy/image';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  productCategory: string;
  currentPrice: number;
  originalPrice: number;
}

export default function ProductCard({
  imageUrl,
  productName,
  productCategory,
  currentPrice,
  originalPrice,
}: ProductCardProps) {
  return (
    <div className="relative group">
      <div className="hidden group-hover:flex transition-opacity ease-in-out duration-300 absolute inset-0 bg-black/60 items-center justify-center z-10">
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-white text-black px-4 py-2 rounded">
            Add to cart
          </button>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center text-white">
              <Share2 />
              <h3>Share</h3>
            </div>
            <div className="flex flex-col items-center text-white">
              <GitCompareArrows />
              <h3>Compare</h3>
            </div>
            <div className="flex flex-col items-center text-white">
              <Heart />
              <h3>Like</h3>
            </div>
          </div>
        </div>
      </div>
      <Card className="rounded-none bg-gray-100/50">
        <CardHeader className="w-full p-0">
          <Image src={imageUrl} alt={productName} width={220} height={200} />
        </CardHeader>
        <CardContent className="px-3 py-5">
          <CardTitle className="text-xl pb-2">{productName}</CardTitle>
          <CardTitle className="text-gray-500 text-sm pb-1">
            {productCategory}
          </CardTitle>
          <CardDescription>
            <span className="text-lg">${currentPrice.toFixed(2)}</span>
            <span className="line-through px-4 text-sm text-gray-400">
              ${originalPrice.toFixed(2)}
            </span>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
