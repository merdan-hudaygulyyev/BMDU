import { useState, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";
import TableHeader from "../../../components/TableHeader/TableHeader";
import Pagination from "../../../components/Pagination/Pagination";
import { fetchClassificators } from "../../../api/services/apiHelpers";

export default function App() {
  const [classific, setClassific] = useState([]);

  useEffect(() => {
    const getClassific = async () => {
      try {
        const data = await fetchClassificators();
        setClassific(data); // Set the fetched data
      } catch (error) {
        console.error("Failed to load high schools:", error);
      }
    };
    getClassific();
  }, []);

  return (
    <>
      <TableHeader title="Klassifikatorlar /" href="/add-classificators" />
      <div className="flex flex-col">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <table className="min-w-full text-center text-sm font-Montserrat dark:text-white">
            <thead className="border-b bg-white dark:bg-[#363062] font-medium dark:border-neutral-500 text-black dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Id
                </th>
                <th scope="col" className="px-6 py-4">
                  Hünar derejeleri
                </th>
                <th scope="col" className="px-6 py-4">
                  Wagty
                </th>
                <th scope="col" className="px-6 py-4">
                  Gurallar
                </th>
              </tr>
            </thead>
            <tbody>
              {classific.length > 0 ? (
                classific.map((classi) => (
                  <tr
                    key={classi.id}
                    className="border-b border-b-slate-400 dark:bg-transparent  bg-white"
                  >
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {classi.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {classi.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Montserrat">
                      {classi.duration}
                    </td>
                    <td className="whitespace-nowrap space-x-2 px-3 py-4">
                      <button className="text-2xl text-white bg-[#AF47D2] hover:bg-[#E49BFF] rounded-full p-1">
                        <AiOutlineEdit />
                      </button>
                      <button className="text-2xl text-white bg-[#AF47D2] hover:bg-[#E49BFF] rounded-full p-1">
                        <HiEye />
                      </button>
                      <button className="text-2xl text-white bg-[#AF47D2] hover:bg-[#E49BFF] rounded-full p-1">
                        <MdOutlineDelete />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination />
    </>
  );
}
