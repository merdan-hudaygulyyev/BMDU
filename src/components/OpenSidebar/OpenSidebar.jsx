import { filterLists, listMenu, menus } from "../Layout/Sidebar/menu";
import { useTranslation } from "react-i18next";
import { FaFilter } from "react-icons/fa";
import HeadIcons from "../icons/HeadIcons";
import FootIcons from "../icons/FootIcons";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function OpenSidebar() {
  const { t } = useTranslation();
  const location = useLocation(); // Get current URL path
  const [activePath, setActivePath] = useState(location.pathname);

  const handleActive = (path) => {
    setActivePath(path);
  };

  return (
    <div className="mt-5 p-2 mb-4 -m-3 w-[250px] max-h-screen rounded-r-md">
      <h2 className="font-Quicksand font-medium text-[#AF47D2]">
        {t("manage")}
      </h2>
      <ul className="mt-2  flex flex-col">
        {menus?.map((menu) => (
          <a
            key={menu.id}
            href={menu.path}
            onClick={() => {
              handleActive(menu.path);
            }}
            className={`flex items-center gap-2 text-nowrap p-2 mr-1 dark:hover:text-[#AF47D2] 
            text-[#AF47D2] hover:pl-4 border rounded-lg hover:bg-[#E49BFF] dark:text-white mt-2 hover:text-white transition-all ${
              activePath === menu.path
                ? "bg-[#AF47D2]/70 text-white p-2 border-none"
                : ""
            }`}
          >
            <span>
              <HeadIcons type={menu.type} />
            </span>
            <h3>{menu.title}</h3>
          </a>
        ))}
      </ul>
      <ul className="mt-4 flex flex-col">
        <h2 className="font-Quicksand font-medium text-[#AF47D2]">
          Okuw işleri
        </h2>
        {listMenu?.map((lists) => (
          <a
            key={lists.id}
            href={lists.path}
            onClick={(e) => {
              handleActive(lists.path);
            }} // Set active path
            className={`flex items-center gap-2 p-2 text-nowrap mr-1 dark:hover:text-[#AF47D2] 
      text-[#AF47D2] hover:pl-4 border rounded-lg hover:bg-[#E49BFF] dark:text-white mt-2 hover:text-white transition-all ${
        activePath === lists.path
          ? "bg-[#AF47D2]/70 text-white p-2 border-none"
          : ""
      }`}
          >
            <span>
              <FootIcons type={lists.type} />
            </span>
            <h3>{lists.title}</h3>
          </a>
        ))}
      </ul>

      <ul className="mt-4 flex flex-col">
        <h2 className="font-Quicksand font-medium text-[#AF47D2]">Süzgüçler</h2>
        {filterLists?.map((filter) => (
          <a
            key={filter.id}
            href={filter.path}
            onClick={(e) => {
              handleActive(filter.path);
            }}
            // Set active path
            className={`flex items-center gap-3 text-nowrap p-2 mr-1 dark:hover:text-[#AF47D2] 
      text-[#AF47D2] hover:pl-4 border rounded-lg hover:bg-[#E49BFF] dark:text-white mt-2 hover:text-white transition-all ${
        activePath === filter.path
          ? "bg-[#AF47D2]/70 text-white p-2 border-none"
          : ""
      }`}
          >
            <span>
              <FaFilter />
            </span>
            <h3>{filter.name}</h3>
          </a>
        ))}
      </ul>
    </div>
  );
}
