import React, { MouseEventHandler, useEffect, useState } from "react";
import Switch from "../Components/Switch/Switch";
import Dropdown from "../Components/Dropdown";
import Tooltip from "../Components/ToolTip/Tooltip";
import DropdownMenu1Icon from "../Components/SVG/DropdownMenu1Icon";
import DropdownMenu2Icon from "../Components/SVG/DropdownMenu2Icon";
import LogoutIcon from "../Components/SVG/LogoutIcon";
import ShoppingIcon from "../Components/SVG/ShoppingIcon";
import ListMenu from "../Components/SVG/ListMenu";
import AddListPlus from "../Components/SVG/AddListPlus";
import ItemsIcon from "../Components/SVG/ItemsIcon";
import Button from "../Components/Button";
import ProductInput from "../Components/ProductInput";
import ShoppingList from "../Components/ShoppingList";
import ProductItem from "../Components/ProductItem";
import Modal from "../Components/Modal";
import { useReducerActions } from "../Hooks/useReducerActions";
import Footer from "../Components/Footer";
import { useAppSelector } from "../Hooks/storeHooks";
import { ShoppingWithId } from "../features/shoppingSlice";

// const listItems = [
//   {
//     id: 1,
//     itemName: "Leche",
//   },
//   {
//     id: 2,
//     itemName: "Queso",
//   },
//   {
//     id: 3,
//     itemName: "Yogur",
//   },
//   {
//     id: 4,
//     itemName: "Mantequilla",
//   },
// ];

const sortingOptions = [
  {
    id: 1,
    name: "Sort by Name",
    type: "byName",
  },
  {
    id: 2,
    name: "Sort by Date",
    type: "byDate",
  },
];

const moreOptions = [
  {
    id: 1,
    name: "Change List name",
    type: "changeName",
  },
  {
    id: 2,
    name: "Delete List",
    type: "deleteList",
  },
  {
    id: 3,
    name: "Delete Selected Items",
    type: "deleteAllProducts",
  },
  {
    id: 4,
    name: "Select All",
    type: "selectAll",
  },
  {
    id: 5,
    name: "Unselect All",
    type: "unselectAll",
  },
];

const HomePage = () => {
  const [theme, setTheme] = useState("light");
  const [isListOpen, setIsListOpen] = useState(true);
  const [selectedList, setSelectedList] = useState<ShoppingWithId | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalEditName, setShowModalEditName] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [newShoppingList, setNewShoppingList] = useState("");
  const [newItem, setNewItem] = useState<string>("");

  const { showSnackbar, newList, removeList, renameList, newProduct } =
    useReducerActions();

  const shopping = useAppSelector((state) => state.shopping);
  const product = useAppSelector((state) => state.product);

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

  const handleSelectedList = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const id = e.currentTarget.dataset.id;
    const clickedList = shopping.find((list) => list.id === id);
    setSelectedList(clickedList);
  };

  const handleNewList = () => {
    setShowModal(true);
  };

  const listNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewShoppingList(e.target.value);

  const onSubmit = () => {
    newList({ listName: newShoppingList });
    setShowModal(false);
    showSnackbar("A New List has been created...");
  };

  const editedNameHandler = () => {
    renameList(selectedList?.id, newShoppingList);
    setShowModalEditName(false);
    showSnackbar("Selected List Name edited...");
  };

  const onDeleteHandler = () => {
    removeList(selectedList.id);
    setShowModalDelete(false);
    showSnackbar("Selected List deleted...");
  };

  const moreOptionsHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const type = target.dataset.type;

    switch (type) {
      case "deleteList":
        setShowModalDelete(true);
        break;
      case "changeName":
        setShowModalEditName(true);
        break;
    }
  };

  const productInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const onSubmitProductHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newProduct({ itemName: newItem, isChecked: false });
  };

  return (
    <div className="dark:h-screen dark:bg-black">
      {/* Edit the name of a list */}
      <Modal
        onClose={() => setShowModalEditName(false)}
        isOpen={showModalEditName}
        title="Change the List Name"
        handleAccept={editedNameHandler}
      >
        <input
          className="text-black w-[85%] ml-8 pl-2"
          type="text"
          defaultValue={selectedList?.listName}
          onChange={listNameInput}
          disabled
        />
      </Modal>
      {/* Create a New List  */}
      <Modal
        onClose={() => setShowModal(false)}
        isOpen={showModal}
        title="Create a New List"
        handleAccept={onSubmit}
      >
        <input
          className="text-black w-[85%] ml-8 pl-2"
          type="text"
          placeholder="Add a New Shopping List..."
          onChange={listNameInput}
        />
      </Modal>
      {/* Delete Shopping List  */}
      <Modal
        onClose={() => setShowModalDelete(false)}
        isOpen={showModalDelete}
        title="Delete Shopping List"
        handleAccept={onDeleteHandler}
      >
        <p className="text-white text-xl font-medium w-[85%] ml-8 pl-2">
          Are you sure you want to delete "{selectedList?.listName}"?
        </p>
      </Modal>
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
              <Dropdown
                onClick={moreOptionsHandler}
                dropdownOptions={moreOptions}
              >
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
          <span
            className="cursor-pointer"
            onClick={() => setIsListOpen((prev) => !prev)}
          >
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
      <main className="sm:flex sm:flex-row sm:gap-3 sm:p-6">
        {isListOpen && (
          <section className="flex flex-col items-center pt-6 dark:bg-black pr-2">
            <Button
              style={{
                width: "283px",
                height: "72px",
                fontSize: "3.75rem",
                lineHeight: "1",
              }}
              icon={<AddListPlus />}
              title="New List"
              onClick={handleNewList}
            />
            <div className="w-full pl-2">
              {shopping.map((list) => (
                <ShoppingList
                  onClick={handleSelectedList}
                  key={list.id}
                  // items={list.items}
                  name={list.listName}
                  dataId={list.id}
                  selectedStyles={`${
                    selectedList?.id === list.id &&
                    "hover:bg-yellow-200/20 bg-yellow-200 text-black font-bold dark:bg-gray-900 dark:text-white dark:hover:bg-gray-900/90"
                  }`}
                />
              ))}
            </div>
          </section>
        )}
        <section className="bg-soft-blue mt-6 sm:w-full dark:bg-black">
          <div className="flex flex-col p-6">
            <div className="mb-6">
              <h2 className="text-3xl font-bold dark:text-white">
                Compra Jumbo
              </h2>
              <p className="dark:text-white">4 items</p>
            </div>
            <div className="flex flex-row justify-start mb-6 items-center">
              <ItemsIcon />
              <ProductInput
                addState={!!newItem}
                onChange={productInputHandler}
                onSubmit={onSubmitProductHandler}
                placeholder="Add a new product..."
              />
            </div>
            {product.map((listItem) => {
              return <ProductItem key={listItem.id} name={listItem.itemName} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
