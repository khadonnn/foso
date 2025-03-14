import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow">
      <h3 className="font-semibold text-lg mb-4">Tìm kiếm</h3>
      <div className="flex">
        <Input
          placeholder="Nhập từ khóa tìm kiếm..."
          className="rounded-r-none"
        />
        <Button className="rounded-l-none bg-primary hover:bg-primary/90">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
