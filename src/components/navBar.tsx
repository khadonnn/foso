import { HeaderTools } from "./header";

const NavBar = () => {
  return (
    <>
      <ul className="hidden lg:flex lg:px-4 md:px-4 gap-4 text-black md:text-lg lg:text-xl">
        {["Về chúng tôi", "Giải pháp", "Tài nguyên", "Liên hệ"].map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between text-lg relative cursor-pointer group transition-colors font-medium hover:text-[#355F2E]"
          >
            <span>{item}</span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#355F2E] transition-all group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#355F2E] transition-all group-hover:w-3/6"></span>
          </li>
        ))}
      </ul>
    </>
  );
};
export const NavBarMobile = () => {
  return (
    <div className="w-full flex flex-row justify-between gap-4">
      <nav className="flex flex-col pl-4 text-black items-center justify-center text-xl font-semibold">
        <ul>
          <li className="hover:text-[#355F2E] transition-colors cursor-pointer font-medium relative group">
            <span className="px-1 relative z-10 group-hover:text-white">Về chúng tôi</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-[#355F2E] z-0 group-hover:h-full"></span>
          </li>
          <li className="hover:text-[#355F2E] transition-colors cursor-pointer font-medium relative group">
            <span className="px-1 relative z-10 group-hover:text-white">Giải pháp</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-[#355F2E] z-0 group-hover:h-full"></span>
          </li>
          <li className="hover:text-[#355F2E] transition-colors cursor-pointer font-medium relative group">
            <span className="px-1 relative z-10 group-hover:text-white">Tài nguyên</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-[#355F2E] z-0 group-hover:h-full"></span>
          </li>
          <li className="hover:text-[#355F2E] transition-colors cursor-pointer font-medium relative group">
            <span className="px-1 relative z-10 group-hover:text-white">Liên hệ</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-[#355F2E] z-0 group-hover:h-full"></span>
          </li>
        </ul>
      </nav>
      <div>
        <HeaderTools isMobile />
      </div>
    </div>
  );
};
export default NavBar;
