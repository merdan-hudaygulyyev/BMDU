import { useState } from "react";
import { useTranslation } from "react-i18next";
import OpenSidebar from "../../OpenSidebar/OpenSidebar";
import logo from "../../../../public/images/logo.png";
import Button from "../../Button/Button";
import { GrHomeRounded } from "react-icons/gr";
import { HiChevronDown } from "react-icons/hi";
import { FaAlignLeft } from "react-icons/fa6";

export default function Sidebar() {
  const [show, setShow] = useState(true);
  const [show_2, setShow_2] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="bg-white max-[1200px]:hidden dark:bg-[#363062] dark:shadow-none shadow-xl overflow-auto overflow-x-hidden rounded-r-md w-[255px] p-4">
        <div className="flex items-center gap-4 ">
          <img src={logo} className="w-10" alt="Logo" />
          <h1 className="font-Quicksand font-medium text-[#AF47D2]">B M D U</h1>
        </div>
        <div className="mt-3.5 flex flex-col justify-center items-center">
          <a href="/" className="font-Montserrat">
            <Button>
              <GrHomeRounded className="text-2xl" /> {t("home")}
            </Button>
          </a>
        </div>
        <div className="mt-3 flex flex-col justify-between gap-2 text-nowrap">
          <p className="font-Poppins text-[#AF47D2]">{t("education")}</p>
          <Button>
            {t("high-school")}
            <HiChevronDown
              onClick={() => {
                setShow(!show);
                setShow_2(false);
              }}
              className={`${!show ? "rotate-180 text-2xl" : "text-2xl"}`}
            />
          </Button>
          <Button>
            {t("school")}
            <HiChevronDown
              onClick={() => {
                setShow_2(!show_2);
                setShow(false);
              }}
              className={`${!show_2 ? "rotate-180 text-2xl" : "text-2xl"}`}
            />
          </Button>
        </div>
        {show && <OpenSidebar />}
        {/* {show_2 && <OpenSidebar_2 />} */}
      </div>
    </>
  );
}
