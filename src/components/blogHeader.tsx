import Image from "next/image";
import React from "react";

const BlogHeader = () => {
  return (
    <div className="min-h-[350px] rounded-lg p-6 mb-8 backdrop-blur-xl">
      <div className="grid grid-cols-12 gap-4 my-10">
        <div className="hidden md:flex col-span-12 md:col-span-3  justify-center md:justify-start">
          <Image
            src="/header_1.png"
            alt="Calendar"
            className="w-48 h-48 object-contain"
            priority
            width={150}
            height={150}
          />
        </div>

        <div className="col-span-12 md:col-span-6 text-center flex flex-col justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl md:text-6xl font-bold">Blog</h1>
            <h1 className="text-3xl md:text-6xl font-bold ml-2 bg-gradient-to-r from-[#53B086] to-[rgba(83,176,134,0.99)] bg-clip-text text-transparent ">
              FOSO
            </h1>
          </div>
          <h2 className="mt-2 text-xl font-semibold">
            Cập Nhật Tin Tức{" "}
            <span className="text-green-600 font-bold">Mới Nhất</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Cung cấp thông tin chuyên ngành về đổi mới sáng tạo và chuyển đổi số
          </p>
        </div>

        <div className="hidden md:flex col-span-12 md:col-span-3 justify-center md:justify-end items-center">
          <Image
            src="/header_2.png"
            alt="Paintbrush"
            className="w-48 h-48 object-contain"
            priority
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
