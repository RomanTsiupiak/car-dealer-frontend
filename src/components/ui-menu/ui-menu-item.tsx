import { ComponentProps } from "react";

type UiMenuItemProps = Omit<ComponentProps<"li">, "value"> & {
  value: string;
};

export const UiMenuItem = ({ children, value, ...props }: UiMenuItemProps) => {
  return (
    <li className="px-2 py-1.5 rounded-md hover:bg-slate-100 cursor-pointer" {...props} data-id={value}>
      {children}
    </li>
  );
};
