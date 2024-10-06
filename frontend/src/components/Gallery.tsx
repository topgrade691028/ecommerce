import Image from 'next/legacy/image';

export default function Gallery() {
  const imageUrls = [
    '/furniro_assets/share1.png',
    '/furniro_assets/share2.png',
    '/furniro_assets/share3.png',
    '/furniro_assets/share4.png',
    '/furniro_assets/share5.png',
    '/furniro_assets/share6.png',
    '/furniro_assets/share7.png',
    '/furniro_assets/share8.png',
    '/furniro_assets/share5.png',
    '/furniro_assets/share6.png',
    '/furniro_assets/share7.png',
    '/furniro_assets/share8.png',
  ];

  return (
    <div className="flex flex-col items-center p-5 pb-10">
      <h2 className="text-2xl font-bold mb-5 text-center">
        Share your setup with <br />
        <span className="font-extrabold">#FuniroFurniture</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-3 w-full">
        <div className="flex flex-col flex-1 basis-1/5 min-w-[150px] gap-y-2 items-end">
          <Image
            src={imageUrls[0]}
            alt="Furniture setup 1"
            width={320}
            height={300}
            className="rounded-lg"
          />
          <Image
            src={imageUrls[3]}
            alt="Furniture setup 4"
            width={320}
            height={195}
            className="rounded-lg mt-2"
          />
        </div>
        <div className="flex flex-col flex-1 basis-1/5 min-w-[150px] gap-2 justify-center items-end">
          <Image
            src={imageUrls[1]}
            alt="Furniture setup 2"
            width={350}
            height={145}
            className="rounded-lg"
          />
          <Image
            src={imageUrls[5]}
            alt="Furniture setup 6"
            width={350}
            height={195}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1 basis-1/5 min-w-[150px] justify-center">
          <Image
            src={imageUrls[5]}
            alt="Furniture setup 6"
            width={500}
            height={95}
            className="rounded-lg"
          />
          <Image
            src={imageUrls[6]}
            alt="Furniture setup 7"
            width={500}
            height={145}
            className="rounded-lg mt-2"
          />
        </div>

        <div className="flex flex-col flex-1 basis-1/5 min-w-[150px] gap-2">
          <Image
            src={imageUrls[7]}
            alt="Furniture setup 8"
            width={300}
            height={145}
            className="rounded-lg"
          />
          <Image
            src={imageUrls[8]}
            alt="Furniture setup 9"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
