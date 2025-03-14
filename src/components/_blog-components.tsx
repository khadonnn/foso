import { CableCar, ChevronRight, TimerIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "@public/logo2.png";

export const ImageSection = (props: React.ComponentProps<typeof Image>) => {
  return (
    <div className="w-full bg-gray-100/50 backdrop-blur-lg rounded-lg">
      <Image
        className="object-cover h-full w-full rounded-lg"
        width={600}
        height={900}
        {...props}
        alt={props.alt || "Blog Image"}
      />
    </div>
  );
};

export const BreadCrumbSection = ({ list }: { list: string[] }) => {
  return (
    <ul className="w-full flex gap-2 !px-0 py-2 mb-12 mt-8 items-center">
      {list.map((item, index) =>
        index === list.length - 1 ? (
          <li key={index} className="flex items-center gap-2">
            <span className="text-gray-900 font-semibold">{item}</span>
          </li>
        ) : (
          <li key={index} className="text-gray-600 flex gap-1 items-center">
            {item} <ChevronRight width={14} height={14} />
          </li>
        )
      )}
    </ul>
  );
};

export const BlogTag = ({ tag }: { tag: string }) => {
  return <span className="bg-blue-100/50 px-2 py-1 rounded-full text-xs text-blue-600 inline-block">{tag}</span>;
};

export const ThumbnailSection = ({
  author,
  date,
  description,
  readingTime,
  ...props
}: React.ComponentProps<typeof Image> & {
  author?: string;
  date?: string;
  description?: string;
  readingTime?: string;
}) => {
  return (
    <div className="w-full  backdrop-blur-md rounded-lg">
      <div className="flex justify-between px-4 py-2 items-center">
        <div className="min-w-[50%] flex gap-2 items-center mt-1">
          <Image
            src={logo.src}
            alt="logo"
            width={20}
            height={20}
            className="rounded-full p-1 w-14 bg-white object-contain"
          />
          <span className="rounded-md">
            <p className="!p-0 !m-0 text-[#667F93]">Tác giả </p>
            <p className="!p-0 !m-0 font-bold truncate">{author}</p>
          </span>
        </div>{" "}
        <span className="flex gap-2 rounded-full text-[#667F93] px-2 py-1 truncate">
          <CableCar />
          {date}
        </span>
        <div className="bg-[#667F93]/50 h-6 w-[1px]"></div>
        <span className="flex gap-2 rounded-full text-[#667F93] px-2 py-1 truncate">
          <TimerIcon />
          {readingTime}
        </span>
      </div>

      <Image
        className="object-cover h-full w-full rounded-lg mt-5"
        width={600}
        height={900}
        {...props}
        alt={props.alt || "Blog Image"}
      />

      <div className="flex justify-between px-4 py-2 relative mt-5">
        <span className="absolute top-0 left-0 text-6xl text-green-500">&quot;</span>
        <p className="min-w-[50%] text-center ">{description}</p>
        <span className="absolute bottom-0 right-0 text-6xl text-green-500">&quot;</span>
      </div>
    </div>
  );
};

export const CalloutSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="callout border-l-4 border-green-500 p-4 pl-6 mt-4">
      <div className="text-xl text-gray-600 italic">{children}</div>
    </div>
  );
};
