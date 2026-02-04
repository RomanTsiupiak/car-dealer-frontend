import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VariantType = "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "medium" | "small";

const variantClasses: Record<VariantType, string> = {
  h1: "text-[48px] font-extrabold line-height-[48px] tracking-[-1.2%]",
  h2: "text-[30px] font-semibold line-height-[36px] tracking-[-0.75%]",
  h3: "text-[24px] font-semibold line-height-[32px] tracking-[-0.6%]",
  h4: "text-[20px] font-semibold line-height-[28px] tracking-[-0.5%]",
  lead: "text-[20px] font-normal line-height-[28px]",
  medium: "text-[18px] font-normal line-height-[28px]",
  p: "text-[16px] font-normal line-height-[28px]",
  small: "text-[14px] font-normal line-height-[18px]",
};

type TypographyProps = {
  variant?: VariantType;
} & ComponentProps<"p">;

export const Typography = ({ variant = "h1", children, className, ...props }: TypographyProps) => {
  return (
    <p className={twMerge("font-inter", variantClasses[variant], className)} {...props}>
      {children}
    </p>
  );
};
