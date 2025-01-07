import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OpenSidebar from "../../OpenSidebar/OpenSidebar";
import logo from "../../../../public/images/logo.png";
import Button from "../../Button/Button";
import { GrHomeRounded } from "react-icons/gr";
import { HiChevronDown } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

export default function Sidebar() {
  const [show, setShow] = useState(true);
  const [show_2, setShow_2] = useState(false);
  const { t, i18n } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowSidebar(false); // Hide sidebar for smaller screens
      } else {
        setShowSidebar(true); // Show sidebar for larger screens
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`bg-white dark:bg-[#363062] dark:shadow-none shadow-xl overflow-auto overflow-x-hidden rounded-r-md ${
          showSidebar ? "w-[255px]" : "w-[72px]"
        }  p-4`}
      >
        <div className="flex items-center gap-4 ">
          <img
            src={logo}
            className="w-10"
            alt="Logo"
            onClick={() => setShowSidebar((prev) => !prev)}
          />
          <h1 className="font-Quicksand font-medium text-[#AF47D2]">B M D U</h1>
        </div>
        <div className="mt-3.5 flex flex-col justify-center items-center">
          <a href="/" className="font-Montserrat">
            <Button>
              <GrHomeRounded className="text-2xl" />
              {!showSidebar ? null : <span> {t("home")}</span>}
            </Button>
          </a>
        </div>
        <div className="mt-3 flex flex-col justify-between gap-2 text-nowrap">
          {showSidebar && (
            <p className="font-Poppins text-[#AF47D2]">{t("education")}</p>
          )}
          <Button
            onClick={() => {
              setShow(!show);
              setShow_2(false);
            }}
          >
            {showSidebar ? (
              <>
                {t("high-school")}
                <HiChevronDown
                  className={`${!show ? "rotate-180 text-2xl" : "text-2xl"}`}
                />
              </>
            ) : (
              <h2>YOJ</h2>
            )}
          </Button>
          <Button
            onClick={() => {
              setShow_2(!show_2);
              setShow(false);
            }}
          >
            {showSidebar ? (
              <>
                {t("school")}
                <HiChevronDown
                  className={`${!show_2 ? "rotate-180 text-2xl" : "text-2xl"}`}
                />
              </>
            ) : (
             <h2>Orta</h2>
            )}
          </Button>
        </div>
        {show && (
          <OpenSidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        )}
        {/* {show_2 && <OpenSidebar_2 />} */}
      </div>
    </>
  );
}
