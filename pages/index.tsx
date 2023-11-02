import React, { useEffect, useState } from "react";
import AddListPlus from "../Components/SVG/AddListPlus";
import ItemsIcon from "../Components/SVG/ItemsIcon";
import Button from "../Components/smallComponents/Button";
import ProductInput from "../Components/smallComponents/ProductInput";
import ShoppingList from "../Components/ShoppingList";
import ProductItem from "../Components/smallComponents/ProductItem";
import Modal from "../Components/Modal";
import { useReducerActions } from "../Hooks/useReducerActions";
import Footer from "../Components/Footer";
import { useAppSelector } from "../Hooks/storeHooks";
import { ShoppingWithId } from "../features/shoppingSlice";
import Header from "../Components/Header";

const HomePage = () => {
  const [isListOpen, setIsListOpen] = useState(true);
  const [selectedList, setSelectedList] = useState<ShoppingWithId | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalEditName, setShowModalEditName] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [newShoppingList, setNewShoppingList] = useState<string | undefined>();
  const [newItem, setNewItem] = useState<string | undefined>();

  console.log(newItem);

  const { showSnackbar, newList, removeList, renameList, newProduct } =
    useReducerActions();

  const shopping = useAppSelector((state) => state.shopping);
  const product = useAppSelector((state) => state.product);

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

  const handleSelectedList = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const id = e.currentTarget.dataset.id;
    const clickedList = shopping.find((list) => list.id === id);
    setSelectedList(clickedList);
  };

  const handleNewList = () => {
    setShowModal(true);
    setNewShoppingList("");
  };

  const listNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewShoppingList(e.target.value);

  const onSubmit = () => {
    if (!newShoppingList) {
      setNewShoppingList("");
    } else {
      newList({ listName: newShoppingList });
      setShowModal(false);
      showSnackbar("A New List has been created...");
    }
  };

  const editedNameHandler = () => {
    if (newShoppingList?.length === 0) {
      setShowModalEditName(true);
    } else {
      renameList(selectedList?.id, newShoppingList);
      setShowModalEditName(false);
      showSnackbar("Selected List Name edited...");
    }
  };

  const onDeleteHandler = () => {
    removeList(selectedList.id);
    setShowModalDelete(false);
    showSnackbar("Selected List deleted...");
  };

  const productInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const onSubmitProductHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newItem?.length > 0) {
      newProduct({ itemName: newItem, isChecked: false });
      setNewItem("");
    } else {
      return null;
    }
  };

  return (
    <div className="dark:h-screen dark:bg-black">
      <Header
        listOpenHandler={() => setIsListOpen((prev) => !prev)}
        dropdownOnClick={moreOptionsHandler}
      />
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
                onChange={productInputHandler}
                onSubmit={onSubmitProductHandler}
                placeholder="Add a new product..."
                value={newItem}
              />
            </div>
            {product.map((listItem) => {
              return <ProductItem key={listItem.id} name={listItem.itemName} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
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
    </div>
  );
};

export default HomePage;
