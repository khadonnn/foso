import {
  Drawer,
  DrawerClose,
  DrawerContent,
  //   DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import { NavBarMobile } from "@/components/navBar";
const DrawerButton = () => {
  return (
    <div className=" flex border border-gray/20 hover:border-gray-600 rounded-md items-center justify-center lg:hidden z-[9999] ">
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <AlignJustify className="w-6 h-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>

          <NavBarMobile />

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Đóng</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default DrawerButton;
