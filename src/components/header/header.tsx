import { UiLogo } from "@/components";

import { MobileView } from "./mobile-view";
import { DesktopView } from "./desktop-view";

export const Header = () => {
  return (
    <header className="flex px-3 py-2 max-w-[1430px] m-auto">
      <div className="flex flex-1 items-center justify-center">
        <UiLogo />
      </div>

      <MobileView />
      <DesktopView />
    </header>
  );
};
