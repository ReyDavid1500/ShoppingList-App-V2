import { moreOptions, sortingOptions } from "../utils/options";
import DropdownMenu1Icon from "./SVG/DropdownMenu1Icon";
import DropdownMenu2Icon from "./SVG/DropdownMenu2Icon";
import Tooltip from "./ToolTip/Tooltip";
import Dropdown from "./smallComponents/Dropdown";
import LogoutIcon from "./SVG/LogoutIcon";
import ListMenu from "./SVG/ListMenu";
import ShoppingIcon from "./SVG/ShoppingIcon";
import { useReducerActions } from "../Hooks/useReducerActions";
import { useEffect, useState } from "react";
import Switch from "./Switch/Switch";

const Header = ({ dropdownOnClick, listOpenHandler }) => {
  const [theme, setTheme] = useState("light");
  const { showSnackbar } = useReducerActions();

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    theme === "light"
      ? showSnackbar("DarkMode Enabled")
      : showSnackbar("DarkMode Disabled");
  };

  return (
    <header>
      <div className="flex flex-row justify-between p-6 bg-gray-100 dark:bg-gray-600">
        <div className="flex flex-row gap-3 items-center">
          <div
            className="sorting-button flex flex-row items-center cursor-pointer"
            tabIndex={0}
            data-descr="Sorting"
          >
            <div className="dropdown relative inline-block hover:block">
              <Dropdown onClick={() => {}} dropdownOptions={sortingOptions}>
                <Tooltip title="Sorting">
                  <div className="text-black dark:text-white">
                    <DropdownMenu1Icon />
                  </div>
                </Tooltip>
              </Dropdown>
            </div>
          </div>
          <div
            className="option-button flex flex-row items-center cursor-pointer"
            tabIndex={0}
            data-descr="Options"
          >
            <Dropdown onClick={dropdownOnClick} dropdownOptions={moreOptions}>
              <Tooltip title="Options">
                <div className="text-black dark:text-white">
                  <DropdownMenu2Icon />
                </div>
              </Tooltip>
            </Dropdown>
          </div>
          <div
            className="dark-mode-button flex flex-row items-center cursor-pointer"
            tabIndex={0}
            data-descr="DarkMode"
          >
            <Tooltip title="DarkMode">
              <Switch isDarkModeOn={handleChangeTheme} />
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-5">
          <span className="text-xl font-medium text-bitcoin-orange dark:text-white">
            david@gmail.com
          </span>
          <div
            className="logout-button flex flex-row items-center cursor-pointer"
            tabIndex={0}
            data-descr="Logout"
          >
            <div className="h-[40px] flex items-center w-[40px] justify-center">
              <Tooltip title="Logout">
                <div className="text-black dark:text-white">
                  <LogoutIcon />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-5 p-6 items-center justify-center bg-soft-blue shadow-lg sm:justify-start sm:pl-16 dark:bg-gray-700">
        <span className="cursor-pointer" onClick={listOpenHandler}>
          <ListMenu />
        </span>
        <h1 className="text-4xl font-bold dark:text-white">
          Shopping List App
        </h1>
        <div className="text-black dark:text-white">
          <ShoppingIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
