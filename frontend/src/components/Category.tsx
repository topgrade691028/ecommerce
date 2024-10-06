import CategoryCard from './CategoryCard';

const category_data = [
  {
    imagePath: '/furniro_assets/living1.png',
    title: 'Living',
  },
  {
    imagePath: '/furniro_assets/bedroom1.png',
    title: 'Bedroom',
  },
  {
    imagePath: '/furniro_assets/dining1.png',
    title: 'Dining',
  },
];

export default function Category() {
  return (
    <div className="container mx-auto py-5 pt-16 text-center gap-4">
      <h1 className="text-3xl font-bold">Browse The Range</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex flex-wrap gap-2 gap-x-8 py-16 justify-center">
        {category_data.map((category, index) => (
          <CategoryCard
            key={index}
            imagePath={category.imagePath}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
}
