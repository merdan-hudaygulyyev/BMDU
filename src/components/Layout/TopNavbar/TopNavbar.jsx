import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import { GrLanguage } from "react-icons/gr";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import Ru from "../../../../public/images/ru.png";
import Tm from "../../../../public/images/tkm.png";
import En from "../../../../public/images/usa.png";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const locales = [
  {
    label: "TM",
    value: "tm",
    icon: Tm,
  },
  {
    label: "RU",
    value: "ru",
    icon: Ru,
  },
  {
    label: "EN",
    value: "en",
    icon: En,
  },
];

export default function TopNavbar() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });

  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setShow(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="m-2 mx-7 p-3 dark:bg-[#363062] px-6 max-h-[100px] flex justify-between items-center shadow-lg rounded-md bg-white">
      <div className="flex items-center gap-2">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AF47D2] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-[#AF47D2]"></span>
        </span>
        <h2 className="text-[#AF47D2] font-Montserrat text-xl">Admin</h2>
        <button title="Sahypadan çykmak" onClick={handleLogout}>
          <BiLogOut className="text-[#AF47D2] font-Montserrat text-xl cursor-pointer" />
        </button>
      </div>
      <div className="space-x-5">
        <button
          title="Light/Dark Mode"
          onClick={toggleDarkMode}
          className="text-2xl outline-none text-[#AF47D2] max-[320px]:hidden max-[331px]:hidden hover:text-[#E49BFF] transition-all"
        >
          {darkMode ? (
            <FaRegMoon />
          ) : (
            <IoSunnyOutline className="animate-spin_slow" />
          )}
        </button>
        <button
          title="Dilini çalyşmak"
          onClick={() => setShow((prev) => !prev)}
          className="text-2xl outline-none text-[#AF47D2] max-[320px]:hidden max-[331px]:hidden hover:text-[#E49BFF] transition-all"
        >
          <GrLanguage />
        </button>
        {show && (
          <div
            className="absolute right-6-7 rounded-xl bg-white top-[77px] h-[100px] w-[70px] dark:bg-[#363062]"
          >
            <div className="m-1 flex flex-col gap-2 font-Ovo p-0.5">
              {locales.map((locale) => (
                <li
                  className="list-none cursor-pointer flex gap-4"
                  key={locale.value}
                  onClick={() => changeLanguage(locale.value)}
                >
                  {locale.label}
                  <span>
                    <img src={locale.icon} className="w-6" />
                  </span>
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
