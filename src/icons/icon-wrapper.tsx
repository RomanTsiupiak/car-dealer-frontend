import { SVGProps } from "react";

export type IconProps = { size?: string } & SVGProps<SVGSVGElement>;

export const IconWrapper = ({ children, size = "24", ...props }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      {children}
    </svg>
  );
};
