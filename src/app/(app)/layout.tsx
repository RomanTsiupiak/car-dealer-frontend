import { LayoutProps } from "@/types/layout";

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
