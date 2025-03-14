import React from "react";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  small?: boolean;
}

const BlogCard = ({
  title,
  image,
  date,
  readTime,
  category,
  slug,
  small = false,
}: BlogCardProps) => {
  return (
    <div
      className={`bg-white/10 rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:shadow-lg ${
        small ? "h-full" : ""
      }`}
    >
      <div className="relative group overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
          width={600}
          height={600}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
        {small && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
            Mới nhất
          </div>
        )}
      </div>

      <div className="p-4">
        <Link href={`/blog/${slug}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        </Link>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>

        <Link
          href={`/blog/${slug}`}
          className="flex items-center text-primary text-sm hover:underline hover:text-[#379d7b] group"
        >
          <span>Xem chi tiết</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150 ease-in-out" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
