import React from "react";
import FootIcons from '../icons/FootIcons'
import { capitalColumn } from "../HighSchoolDetails/highSchoolDetails";

export default function CapitalColumn() {
  return (
    <ul className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full p-2">
      {capitalColumn.map((cols) => (
        <a
          href={cols.path}
          key={cols.id}
          className="bg-white dark:text-white dark:bg-violet-400/25 dark:hover:bg-violet-400 rounded-lg shadow-xl hover:bg-white/60 max-w-[300px] max-h-[100px]  p-4 flex justify-between items-center"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-Poppins font-semibold">
              {cols.title}
            </h3>
            <p className="font-Montserrat">{cols.text}</p>
          </div>
          <span className="rounded-full p-2 bg-slate-500 text-white max-[769px]:hidden">
            <FootIcons type={cols.type} />
          </span>
        </a>
      ))}
    </ul>
  );
}
