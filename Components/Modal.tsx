import { createPortal } from "react-dom";
import Button from "./Button";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import useOnClickOutside from "../Hooks/useOnClickOutside";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
  handleAccept: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({
  children,
  isOpen,
  title,
  onClose,
  handleAccept,
}: ModalProps) => {
  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  const { ref } = useOnClickOutside(onClose);

  return createPortal(
    <>
      {isOpen && (
        <div
          ref={ref}
          className="bg-gray-600 flex justify-center items-center text-white fixed top-[25%] md:left-[40%] sm:left-[23%] left-[7%] right-[50%] bottom-[50%] z-10 h-[150px] sm:w-[400px] w-[300px] rounded-2xl border-4 border-black dark:bg-white"
        >
          <h1 className="absolute top-4 right-0 left-4 bottom-0 text-2xl dark:text-black z-[-10]">
            {title}
          </h1>
          <div className="w-full">{children}</div>
          <div className="text-lg flex flex-row gap-3 w-auto absolute top-[100px] right-0 sm:left-[130px] left-[7%] bottom-0">
            <Button
              style={{
                width: "120px",
                height: "30px",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
              icon={<CheckIcon className="h-6 w-6 text-white" />}
              title="Accept"
              onClick={handleAccept}
            />
            <Button
              style={{
                width: "120px",
                height: "30px",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
              icon={<XMarkIcon className="h-6 w-6 text-white" />}
              title="Cancel"
              onClick={onClose}
            />
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
