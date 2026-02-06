"use client";

import { Typography, UiMenu } from "@/components";
import { HamburgerIcon } from "@/icons";

const options = [
  { label: "Services", value: "services" },
  { label: "Vehicles", value: "vehicles" },
  { label: "Contact Us", value: "contact-us" },
];

export const MobileView = () => {
  return (
    <div className="flex md:hidden flex-2 items-center justify-end">
      <UiMenu onSelect={(data) => {}} trigger={<HamburgerIcon className="text-slate-700" size="16" />}>
        {options.map((option) => (
          <UiMenu.Item value={option.value} key={option.value}>
            <Typography variant="p" className="text-slate-700">
              {option.label}
            </Typography>
          </UiMenu.Item>
        ))}
      </UiMenu>
    </div>
  );
};
