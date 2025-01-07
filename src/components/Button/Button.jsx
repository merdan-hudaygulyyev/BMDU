import React from "react";

export default function Button({ children }) {
  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="flex gap-2 justify-center items-center outline-none rounded dark:shadow-none bg-[#AF47D2] px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-xl transition duration-150 ease-in-out hover:bg-[#E49BFF] hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    >
      {children}
    </button>
  );
}
