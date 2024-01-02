import { Menu } from "lucide-react";
import Button from "../components/Button";
import { useSidebarContext } from "../contexts/SidebarContext";
import { SidebarItem, iconSidebarItems } from "../data/sidebar";

export const Sidebar = () => {
  return (
    <aside className="overflow-y-auto">
      <SmallScreenSidebar />
      <LargeScreenSidebar />
    </aside>
  );
};

const SmallScreenSidebar = () => {
  const { sidebarDrawerOpen, setSidebarDrawerOpen } = useSidebarContext();
  console.log(sidebarDrawerOpen);
  return (
    <div id="small-screen-sidebar" className="h-full md:hidden">
      <Drawer isOpen={sidebarDrawerOpen} setIsOpen={setSidebarDrawerOpen} />
      <IconSidebarItems />
    </div>
  );
};

const Drawer = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) => {
  return (
    <div
      id="sidebar"
      className={`w-15 fixed bottom-0 top-0 z-50 bg-white ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen((prev: boolean) => !prev)}
      >
        <Menu />
      </Button>
      <div className="drawer-content p-4">
        {iconSidebarItems.map((item, i) => (
          <FullSidebarItem key={`icon-item-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
};

const IconSidebarItems = () => {
  return (
    <>
      {iconSidebarItems.map((item, i) => (
        <IconSidebarItem key={`item-${i}`} item={item} />
      ))}
    </>
  );
};

const IconSidebarItem = ({ item }: { item: SidebarItem }) => {
  return (
    <div className="flex">
      <div>{item.icon}</div>
    </div>
  );
};

const FullSidebarItem = ({ item }: { item: SidebarItem }) => {
  return (
    <div className="flex">
      <div>{item.icon}</div>
      <div>{item.label}</div>
    </div>
  );
};

const LargeScreenSidebar = () => {
  const { largeSidebarOpen, setLargeSidebarOpen } = useSidebarContext();
  return (
    <div
      id="large-screen-sidebar"
      className="hidden h-full overflow-y-auto md:block"
    >
      {largeSidebarOpen ? <div>Large Sidebar</div> : <IconSidebarItems />}
    </div>
  );
};
