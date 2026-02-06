import Link from "next/link";

import { Typography } from "@/components";

const options = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Contact Us", href: "/contact-us" },
];

export const DesktopView = () => {
  return (
    <div className="hidden md:flex flex-2 items-center justify-evenly">
      {options.map((option) => (
        <Link href={option.href} key={option.href}>
          <Typography variant="p" className="text-slate-700">
            {option.label}
          </Typography>
        </Link>
      ))}
    </div>
  );
};
