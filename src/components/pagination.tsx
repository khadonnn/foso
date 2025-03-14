"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BreadcrumbEllipsis } from "@/components/ui/breadcrumb";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationDemo = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const generatePages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1, 2, 3);

    if (currentPage > 4) {
      pages.push("...");
    }

    if (currentPage > 3 && currentPage < totalPages - 2) {
      pages.push(currentPage);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages - 2, totalPages - 1, totalPages);

    return pages;
  };

  return (
    <div className="flex justify-center mt-4 gap-2">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        «
      </Button>

      {generatePages().map((page, index) => {
        if (typeof page === "number") {
          return (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          );
        } else {
          return (
            <DropdownMenu key={`dots-${index}`}>
              <DropdownMenuTrigger>
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">...</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="max-h-32 overflow-y-auto">
                {Array.from({ length: totalPages - 6 }, (_, i) => i + 4).map(
                  (hiddenPage) => (
                    <DropdownMenuItem
                      key={hiddenPage}
                      onClick={() => onPageChange(hiddenPage)}
                    >
                      {hiddenPage}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }
      })}

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        »
      </Button>
    </div>
  );
};

export default PaginationDemo;
