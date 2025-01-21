import { basket, filterLists, listMenu, menus } from "../Layout/Sidebar/menu";
import { useTranslation } from "react-i18next";
import { FaFilter } from "react-icons/fa";
import HeadIcons from "../icons/HeadIcons";
import FootIcons from "../icons/FootIcons";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function OpenSidebar({ showSidebar }) {
  const { t } = useTranslation();
  const location = useLocation(); // Get current URL path
  const [activePath, setActivePath] = useState(location.pathname);

  const handleActive = (path) => {
    setActivePath(path);
  };

  return (
    <div className="mt-5 p-2 mb-4 -m-3 w-[250px] max-h-screen rounded-r-md">
      {showSidebar && (
        <h2 className="font-Quicksand font-bold text-gray-600 dark:text-gray-300">
          {t("manage")}
        </h2>
      )}
      <ul className="mt-2 flex flex-col">
        {menus?.map((menu) => (
          <a
            key={menu.id}
            href={menu.path}
            onClick={() => {
              handleActive(menu.path);
            }}
            className={`flex items-center gap-2 text-nowrap p-2 mr-1 
            text-gray-600 hover:pl-4 ${
              showSidebar && "border"
            } border-none rounded-lg hover:bg-slate-600 dark:text-white mt-2 hover:text-white transition-all ${
              activePath === menu.path
                ? "bg-slate-600 text-white p-2 border-none"
                : ""
            }`}
          >
            <span>
              <HeadIcons type={menu.type} />
            </span>
            {showSidebar && <h3>{menu.title}</h3>}
          </a>
        ))}
      </ul>
      <ul className="mt-4 flex flex-col">
        {showSidebar && (
          <h2 className="font-Quicksand font-bold text-gray-600 dark:text-gray-300">
            Okuw işleri
          </h2>
        )}
        {listMenu?.map((lists) => (
          <a
            key={lists.id}
            href={lists.path}
            onClick={() => {
              handleActive(lists.path);
            }} 
            className={`flex items-center gap-2 p-2 text-nowrap mr-1 
      text-gray-500 hover:pl-4 ${
        showSidebar && "border"
      } border-none rounded-lg hover:bg-slate-600 dark:text-white mt-2 hover:text-white transition-all ${
              activePath === lists.path
                ? "bg-slate-600 text-white p-2 border-none"
                : ""
            }`}
          >
            <span>
              <FootIcons type={lists.type} />
            </span>
            {showSidebar && <h3>{lists.title}</h3>}
          </a>
        ))}
      </ul>

      <ul className="mt-4 flex flex-col">
        {showSidebar && (
          <h2 className="font-Quicksand font-bold text-gray-600 dark:text-gray-300">Süzgüçler</h2>
        )}
        {filterLists?.map((filter) => (
          <a
            key={filter.id}
            href={filter.path}
            onClick={() => {
              handleActive(filter.path);
            }}
            className={`flex items-center gap-3 text-nowrap p-2 mr-1 
      text-gray-500 hover:pl-4 ${
        showSidebar && "border"
      } border-none rounded-lg hover:bg-slate-600 dark:text-white mt-2 hover:text-white transition-all ${
              activePath === filter.path
                ? "bg-slate-600 text-white p-2 border-none"
                : ""
            }`}
          >
            <span>
              <FaFilter />
            </span>
            {showSidebar && <h3>{filter.name}</h3>}
          </a>
        ))}
      </ul>
      {basket?.map((filter) => (
        <a
          key={filter.id}
          href={filter.path}
          onClick={() => {
            handleActive(filter.path);
          }}
          className={`flex items-center gap-3 text-nowrap p-2 mr-1 dark:hover:text-[#AF47D2] 
      text-gray-500 hover:pl-4 ${
        showSidebar && "border"
      } border-none rounded-lg hover:bg-slate-600 dark:text-white mt-2 hover:text-white transition-all ${
            activePath === filter.path
              ? "bg-slate-600 text-white p-2 border-none"
              : ""
          }`}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </span>
          {showSidebar && <h3>{filter.name}</h3>}
        </a>
      ))}
    </div>
  );
}
