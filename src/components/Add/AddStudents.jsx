import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { fetchHighSchools } from "../../api/services/apiHelpers";

export default function AddStudents() {
  const [highSchools, setHighSchools] = useState([]);
  
  useEffect(() => {
    const getHighSchools = async () => {
      try {
        const data = await fetchHighSchools();
        setHighSchools(data);
      } catch (error) {
        console.error("Failed to load high schools:", error);
      }
    };
    getHighSchools();
  }, []);

  return (
    <div className="mt-10 max-h-screen md:dark:bg-[#092635] bg-none max-w-full rounded-lg overflow-y-auto overflow-x-hidden mx-9 my-6">
      <h2 class="mt-3 text-center font-Quicksand font-medium text-slate-600 dark:text-white text-2xl">
        Talyp hasaba almak
      </h2>
      <div className="max-h-screen bg-white dark:bg-[#092635] mt-5 shadow-xl rounded-md max-w-full p-6">
        <form class="max-w-full mx-auto">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ýokary okuw jaýlaryny saýla
          </label>
          <select
            id="countries"
            class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected disabled>
              ...
            </option>

            {highSchools.map((school) => (
              <>
                <option key={school.id} value={school.name}>
                  {school.name}
                </option>
              </>
            ))}
          </select>
        </form>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="multiple_files"
        >
          Import
        </label>
        <input
          class="block w-full text-sm text-gray-900 p-1 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="multiple_files"
          type="file"
          multiple
        />
        <div className="flex gap-3 mt-4">
          <button
            className="mt-2 outline-none bg-slate-700 dark:bg-slate-600
                  hover:bg-slate-600 dark:hover:bg-slate-400 px-10 py-2 text-white uppercase rounded font-Quicksand tracking-wider"
            type="submit"
          >
            Import
          </button>
          <button
            className="mt-2 outline-none bg-slate-700 dark:bg-slate-600
                  hover:bg-slate-600 dark:hover:bg-slate-400 px-10 py-2 text-white uppercase rounded font-Quicksand tracking-wider"
            type="submit"
          >
            Arassala
          </button>
          <button
            className="mt-2 outline-none bg-slate-700 dark:bg-slate-600
                  hover:bg-slate-600 dark:hover:bg-slate-400 px-10 py-2 text-white uppercase rounded font-Quicksand tracking-wider"
          >
            Nusgalamak
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
