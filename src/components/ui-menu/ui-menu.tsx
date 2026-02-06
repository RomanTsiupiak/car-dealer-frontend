"use client";

import { useState, ReactNode, useRef } from "react";

import { useOutsideClick } from "@/hooks/use-outside-click";

import { UiMenuItem } from "./ui-menu-item";

type UiMenuProps = {
  trigger: ReactNode;
  onSelect: (id: string) => void;
  children?: ReactNode;
};

const UiMenuComponent = ({ onSelect, children, trigger }: UiMenuProps) => {
  const [opened, toggle] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick({ ref: menuRef, action: () => toggle(false) });

  const handleSelect = (event: React.MouseEvent<HTMLUListElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const li = event.target instanceof HTMLElement ? event.target.closest("li[data-id]") : null;

    if (li) {
      onSelect(li.getAttribute("data-id") || "");
      toggle(false);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button type="button" onClick={() => toggle((prev) => !prev)}>
        {trigger}
      </button>

      {opened && (
        <ul
          onClick={handleSelect}
          className="bg-white rounded-md shadow-sm absolute top-full right-0 px-2 py-1 w-max z-10"
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export const UiMenu = Object.assign(UiMenuComponent, {
  Item: UiMenuItem,
});
