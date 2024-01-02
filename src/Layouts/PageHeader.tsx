import logo from "../assets/react.svg";
import { ArrowLeft, Bell, Menu, Mic, Search, User, Video } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

function PageHeader() {
  const [searchPopup, setSearchPopup] = useState(false);
  return (
    <div className="mx-4 mb-6 flex justify-between gap-10 pt-2 lg:gap-20">
      <div className="flex flex-shrink-0 items-center gap-4 ">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" alt="logo" />
        </a>
      </div>
      <form
        className={`${
          searchPopup ? "flex" : "hidden md:flex"
        } flex-grow justify-center gap-4 `}
      >
        <Button
          size="icon"
          variant={"ghost"}
          className={`${searchPopup ? "flex md:hidden" : "hidden"}`}
        >
          <ArrowLeft />
        </Button>
        <div className="flex max-w-[600px] flex-grow ">
          <input
            type="search"
            placeholder="search"
            className="w-full rounded-l-full border border-secondary-border px-4 py-1 text-lg shadow-inner shadow-secondary outline-none focus:border-blue-500"
          />
          <Button className="rounded-r-full border">
            <Search />
          </Button>
        </div>
        <Button>
          <Mic />
        </Button>
      </form>
      <div
        className={`${
          searchPopup ? "hidden md:flex" : "flex"
        } flex-shrink-0 border border-blue-500 md:gap-2`}
      >
        <Button
          size="icon"
          variant="ghost"
          className="flex md:hidden"
          onClick={() => setSearchPopup(true)}
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost">
          <Video />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
