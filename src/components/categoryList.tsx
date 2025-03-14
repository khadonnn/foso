import React from "react";
import Link from "next/link";

interface Category {
  name: string;
  count: number;
  slug: string;
}

const categories: Category[] = [
  { name: "Tất cả", count: 159, slug: "tat-ca" },
  { name: "Thiết Kế Website", count: 53, slug: "thiet-ke-website" },
  { name: "Thiết Kế App Mobile", count: 47, slug: "thiet-ke-app-mobile" },
  { name: "Quản Lý Dữ Liệu", count: 35, slug: "quan-ly-du-lieu" },
  { name: "Điện Tử Điện Lạnh FOSO", count: 29, slug: "dien-tu-dien-lanh-foso" },
  { name: "Tin Tức FOSO", count: 8, slug: "tin-tuc-foso" },
];
const CategoryList = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow">
      <h3 className="font-semibold text-lg mb-4">Danh Mục</h3>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center justify-between">
            <Link
              href={`/categories/${category.slug}`}
              className="text-gray-700 hover:text-primary"
            >
              {category.name}
            </Link>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
