"use client";
import BlogHeader from "@/components/blogHeader";
import BlogBody from "@/components/blogBody";
import { useState } from "react";
import PaginationDemo from "@/components/pagination";
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  return (
    <div className="min-h-screen w-full mx-auto pt-28">
      <BlogHeader />
      <BlogBody />
      <PaginationDemo
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
