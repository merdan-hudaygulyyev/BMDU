import { fetchFaculties } from "../../../api/services/apiHelpers";
import { useState, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";
import TableHeader from "../../../components/TableHeader/TableHeader";
import Pagination from "../../../components/Pagination/Pagination";

export default function App() {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const getFaculties = async () => {
      try {
        const data = await fetchFaculties();
        setFaculties(data); // Set the fetched data
      } catch (error) {
        console.error("Failed to load high schools:", error);
      }
    };
    getFaculties();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this?"
      );
      if (confirmDelete) {
        // Call the delete API
        localStorage.removeItem("faculties");
        // Remove the deleted school from the state
        setFaculties((prev) => prev.filter((fac) => fac.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete the school:", error);
    }
  };

  return (
    <>
      <TableHeader title="Fakultetler /" href="/add-faculties" />
      <div className="flex flex-col">
        <div className="py-2 mx-4">
          <table className="min-w-full text-center text-sm font-Montserrat dark:text-white">
            <thead className="border-b bg-white dark:bg-[#363062] font-medium dark:border-neutral-500 text-black dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Id
                </th>
                <th scope="col" className="px-6 py-4">
                  Fakultetler
                </th>
                <th scope="col" className="px-6 py-4">
                  Gygaltmasy
                </th>
                <th scope="col" className="px-6 py-4">
                  Gurallar
                </th>
              </tr>
            </thead>
            <tbody>
              {faculties.length > 0 ? (
                faculties.map((fac) => (
                  <tr
                    key={fac.id}
                    className="border-b border-b-slate-400 dark:bg-transparent  bg-white"
                  >
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {fac.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {fac.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {fac.abbreviation}
                    </td>
                    <td className="whitespace-nowrap space-x-2 px-3 py-4">
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <AiOutlineEdit />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <HiEye />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <MdOutlineDelete onClick={() => handleDelete(fac.id)} />
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
