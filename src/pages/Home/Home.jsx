import Charts from "../../components/Charts/Charts";
import Columns from "../../components/Columns/Columns";
import FootColumns from "../../components/Columns/FootColumns";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="max-h-screen md:dark:bg-[#092635] bg-none mx-9 max-w-full rounded-lg overflow-y-auto overflow-x-hidden ">
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
      <Footer />
    </div>
  );
}
