"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  // SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Globe } from "lucide-react";
import React from "react";
import { useLockBodyScroll } from "@/hooks/useLockScroll";

const languages = [
  { code: "vi", name: "Vietnamese", flag: "/flags/vietnam.png" },
  { code: "en", name: "English (US)", flag: "/flags/usa.png" },
  { code: "ca", name: "Canada", flag: "/flags/canada.png" },
];

export function SelectDemo() {
  const [value, setValue] = React.useState("vi");
  const [isOpen, setIsOpen] = React.useState(false);
  useLockBodyScroll(isOpen);
  const currentLang = languages.find((lang) => lang.code === value);
  return (
    <Select onValueChange={(value) => setValue(value)} value={value} onOpenChange={setIsOpen}>
      <SelectTrigger className="rounded-full ">
        {value ? (
          <div className="flex items-center gap-2">
            <Image src={currentLang?.flag || ""} alt="flag" className="w-6 h-6 rounded-full" width={24} height={24} />
            <span>{currentLang?.code.toLocaleUpperCase()}</span>
          </div>
        ) : (
          <Globe size={16} />
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center gap-2">
                <Image src={lang.flag} alt={lang.name} className="w-6 h-6 rounded-full" width={24} height={24} />
                {lang.name}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
