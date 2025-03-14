import { SelectDemo } from "@/components/languages";
import Image from "next/image";
import logo from "@public/logo.png";
import { ArrowUpRightIcon } from "lucide-react";
import NavBar from "@/components/navBar";
import Link from "next/link";
import DrawerButton from "./drawer";

const Header = () => {
  return (
    <nav className=" fixed mx-auto top-0 left-1/2 -translate-x-1/2 z-10 px-4 sm:px-6 lg:px-8 py-4 flex items-center min-h[36px] min-w-[80%] md:min-w-[90%]">
      <div className="mx-full mt-1 container backdrop-blur-xl bg-white/20 rounded-full border border-gray/20 shadow-md px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 lg:w-1/6 ">
            <div className="text-white font-bold text-xl min-h-14">
              <Link href="/">
                <Image src={logo.src} alt="Logo" width={134} height={54} priority objectFit="contain" />
              </Link>
            </div>
          </div>

          {/* Navigation menu */}
          <NavBar />

          <DrawerButton />

          <HeaderTools />
          {/* Right side controls */}
        </div>
      </div>
    </nav>
  );
};

export const HeaderTools = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <div
      className={isMobile ? "flex items-center space-x-4 md:w-2/6" : "hidden items-center space-x-4 md:w-2/6 lg:flex"}
    >
      <div className={`relative flex gap-2 justify-end items-center w-full ${isMobile ? "flex-col" : "flex-row"}`}>
        <div className="border-primary text-primary hover:custom-green h-full w-fit">
          <SelectDemo />
        </div>

        <div className="bg-[#1AD598] hover:opacity-90 text-gray-900 px-3 py-2 rounded-full font-semibold flex items-center gap-2 group cursor-pointer text-nowrap">
          Đăng ký {isMobile ? "" : "miễn phí"}
          <span className="p-1 rounded-full w-fit h-fit bg-gray-900 text-white group-hover:rotate-45 transition-transform duration-150 ease-in-out">
            <ArrowUpRightIcon size={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
