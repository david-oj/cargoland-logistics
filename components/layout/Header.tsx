import { arrowDown2 } from "@/assets/icons";
import { cargolandLogo } from "@/assets/images";
import { Icon } from "@iconify/react";
import { Menu, MenuSquare, UserCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Header = () => {
  return (
    <header className="py-2 md:py-4 padding-x bg-white">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="relative w-28 md:w-35.25 h-10 md:h-12 shrink-0"
        >
          <Image
            src={cargolandLogo.src}
            alt="Cargoland Logo"
            className="size-full object-cover"
            fill
          />
        </Link>

        <nav className="max-md:hidden">
          <ul className="flex gap-6 lg:gap-10.5">
            <li className="text-sm leading-5 flex items-center gap-1.5">
              <Link href="#services">Services</Link>
              <Icon icon={arrowDown2} />
            </li>
            <li className="text-sm leading-5">
              <Link href="#tracking">Tracking</Link>
            </li>
            <li className="text-sm leading-5">
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li className="text-sm leading-5">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex gap-2 max-md:hidden">
            <UserCircleIcon className="size-6" />
            <p className="leading-5">Login/Register</p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <button className="p-0">
                <Menu className="text-secondary w-8" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="p-2">
              <DropdownMenuItem className="text-sm leading-5 flex items-center justify-between">
                <Link href="#services">Services</Link>
                <Icon icon={arrowDown2} />
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm leading-5">
                <Link href="#tracking">Tracking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm leading-5">
                <Link href="#how-it-works">How It Works</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm leading-5">
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
