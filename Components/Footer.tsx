import Modal from "./Modal";
import GarbageBinIcon from "./SVG/GarbageBinIcon";
import PlusIcon from "./SVG/PlusIcon";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-raw justify-between w-full p-6 sm:justify-end sm:gap-6">
        <GarbageBinIcon />
        <div className="text-black dark:text-white">
          <button className="cursor-pointer" type="button">
            <PlusIcon height="75" width="59" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
