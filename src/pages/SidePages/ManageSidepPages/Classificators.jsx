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

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this?"
      );
      if (confirmDelete) {
        // Call the delete API
        localStorage.removeItem("classificator");
        // Remove the deleted school from the state
        setClassific((prev) => prev.filter((classi) => classi.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete the school:", error);
    }
  };

  return (
    <>
      <TableHeader title="Klassifikatorlar /" href="/add-classificators" />
      <div className="flex flex-col">
        <div className="py-2 mx-4">
          <table className="min-w-full text-center text-sm font-Montserrat dark:text-white">
            <thead className="border-b bg-white dark:bg-[#092635] font-medium dark:border-neutral-500 text-black dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Id
                </th>
                <th scope="col" className="px-6 py-4">
                Klassifikatorlar
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
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <AiOutlineEdit />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <HiEye />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <MdOutlineDelete
                          onClick={() => handleDelete(classi.id)}
                        />
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
