import Charts from "../../components/Charts/Charts";
import Columns from "../../components/Columns/Columns";
import FootColumns from "../../components/Columns/FootColumns";

export default function Home() {
  return (
    <div className="max-h-screen md:dark:bg-[#363062] bg-none mx-7 max-w-full rounded-lg overflow-y-auto overflow-x-hidden ">
      <Columns />
      <div className="mt-2 w-full max-h-screen">
        <Charts />
      </div>

      <div className="mt-4 m-3">
        <h2 className="text-2xl font-Poppins dark:text-white mb-3">
          Okuwy tamamlaýanlar
        </h2>
        <FootColumns />
      </div>

      <div className="rounded-lg mx-2 p-4  dark:bg-[#363062] dark:text-white">
        <span>© 2024 Copyright. </span>
        <a
          className="font-semibold text-neutral-600 dark:text-white"
          href="https://tw-elements.com/"
        >
          Ähli hukuklar goralan
        </a>
      </div>
    </div>
  );
}
