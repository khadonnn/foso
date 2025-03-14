"use client";
import { PackageIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const CategoryStyle = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const categorySlug = segments.length > 1 ? segments[1] : null;
  return (
    <div className="min-h-screen">
      <div className="mt-10"> </div>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center h-96 space-y-4">
          <div className="bg-base-100 rounded-full p-6">
            <PackageIcon className="size-12" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-semibold ">
              On going building page {categorySlug}
            </h3>
            <p className="text-gray-500 max-w-sm">
              Please wait for the next update
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CategoryStyle;
