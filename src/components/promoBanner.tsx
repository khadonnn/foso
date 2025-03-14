import Image from "next/image";
import { Button } from "@/components/ui/button";
import { promoBanners } from "@/data/db";

interface PromoBannerProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  buttonLink: string;
  cat?: string;
}

export const PromoBanner = ({ title, description, buttonText, imageSrc, buttonLink, cat }: PromoBannerProps) => {
  // Cấu hình kích thước ảnh theo category
  const sizeConfig = {
    product: "w-[100px] h-[100px]",
    community: "w-full h-[300px]",
  };

  return (
    <div className="bg-[#09347a] text-white rounded-lg overflow-hidden shadow-lg mb-6">
      <div className="p-4">
        {/*  category === 'product' */}
        {cat === "product" && (
          <div>
            {/* image top */}
            <div className="flex justify-center mb-4">
              <Image
                src="/mocklayout.png"
                alt="Product Logo"
                className="object-cover h-[300px] w-full"
                width={300}
                height={300}
              />
            </div>

            {/*image and logo */}
            <div className="flex items-center justify-center gap-2">
              <Image
                src={imageSrc}
                alt={title}
                className={`object-cover ${sizeConfig.product}`}
                width={100}
                height={100}
              />
              <Image
                src="/mrp.svg"
                alt="Product Icon"
                className="w-[100px] h-[100px] object-contain mb-4"
                width={100}
                height={100}
              />
            </div>
          </div>
        )}

        {/* Hiển thị ảnh chính cho các category khác */}
        {cat !== "product" && imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            className={`object-contain mb-4 ${sizeConfig[cat as keyof typeof sizeConfig] || sizeConfig.community}`}
            width={600}
            height={600}
          />
        )}

        {/* Mô tả và nút bấm */}
        <p className="text-sm mb-4">{description}</p>
        <Button className="bg-white text-[#09347a] hover:bg-gray-100 w-full" asChild>
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </div>
    </div>
  );
};

export const AdsBanner = () => {
  return (
    <>
      {promoBanners.map((banner, index) => (
        <PromoBanner
          key={index}
          title={banner.title}
          description={banner.description}
          buttonText={banner.buttonText}
          imageSrc={banner.imageSrc}
          buttonLink={banner.buttonLink}
          cat={banner.cat}
        />
      ))}
    </>
  );
};

export default AdsBanner;
