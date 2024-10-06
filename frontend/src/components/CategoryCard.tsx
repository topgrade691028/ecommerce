import Image from 'next/legacy/image';

interface CategoryCardProps {
  imagePath: string;
  title: string;
}

export default function CategoryCard({ imagePath, title }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={imagePath}
        alt={title}
        width={300}
        height={50}
        className="object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}
