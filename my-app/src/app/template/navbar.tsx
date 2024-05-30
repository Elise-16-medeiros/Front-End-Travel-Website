import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import clsx from "clsx";
import { UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container realative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo image" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter pb-1.5 text-gray-50 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button className="btn_dark_green flexCenter bold-16 gap-2 whitespace-nowrap">
          <UserRound />
          Login
        </Button>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}
