import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex gap-2 dark:text-white dark:bg-slate-700 bg-slate-700 hover:bg-slate-600 text-white  justify-center items-center outline-none rounded dark:shadow-none px-5 pb-2 pt-2.5 text-xs font-medium uppercase  shadow-xl transition duration-150 ease-in-out focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 "
    >
      {children}
    </button>
  );
}
