"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Image from "next/image";
import NavEnlaces from "./nav-enlaces";
import { useCallback, useEffect, useState } from "react";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  const isMobile = () => window.innerWidth < 768;

  const handleResize = useCallback(() => {
    if (!isMobile() && open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleOpenChange = (state) => {
    if (isMobile()) {
      setOpen(state);
    }
  };

  const onClickLink = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger>
        <AlignJustify size={28} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="https://res.cloudinary.com/due4z1bf8/image/upload/f_auto,q_auto/v1747338462/logo-solo_umvs9b.png"
              alt="logo codifica"
              width="70"
              height="80"
              className="mb-12 w-[5.5rem]"
            />
          </SheetTitle>

          <SheetDescription className="flex flex-col gap-6 text-base text-black">
            <NavEnlaces onClickLink={onClickLink} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
