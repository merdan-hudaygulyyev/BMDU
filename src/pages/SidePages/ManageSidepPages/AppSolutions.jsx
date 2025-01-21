import { useState, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";
import TableHeader from "../../../components/TableHeader/TableHeader";
import { changeDegrees, changeDepartment, deleteDegrees, fetchDegrees } from "../../../api/services/apiHelpers";
import Pagination from "../../../components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [degrees, setDegrees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    duration: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getDegrees = async () => {
      try {
        const data = await fetchDegrees();
        setDegrees(data); // Set the fetched data
      } catch (error) {
        console.error("Failed to load high schools:", error);
      }
    };
    getDegrees();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this?"
      );
      if (confirmDelete) {
        await deleteDegrees(id); // Pass the ID directly
        localStorage.removeItem("degrees");
        setDegrees((prev) => prev.filter((degree) => degree.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete the department:", error);
    }
  };

  const handleEdit = (caf) => {
    setEditData({
      id: caf.id,
      name: caf.name,
      duration: caf.duration || "",
    }); // Ensure abbreviation is included
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      const updateData = {
        name: editData.name,
        duration: editData.duration || "", // Send an empty string if abbreviation is missing
      };
      await changeDegrees(editData.id, updateData);
      setIsModalOpen(false);
      setDegrees((prev) =>
        prev.map((degree) =>
          degree.id === editData.id
            ? {
                ...degree,
                name: editData.name,
                duration: editData.duration || "",
              }
            : degree
        )
      );
    } catch (error) {
      console.error("Failed to update department:", error);
    }
  };

  return (
    <>
      <TableHeader title="Hünar derejesi /" href="/add-degrees" />
      <div className="flex flex-col">
        <div className="py-2 mx-4">
          <table className="min-w-full text-center text-sm font-Montserrat dark:text-white">
            <thead className="border-b bg-white dark:bg-[#092635] font-medium dark:border-neutral-500 text-black dark:text-white">
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
              {degrees.length > 0 ? (
                degrees.map((degree) => (
                  <tr
                    key={degree.id}
                    className="border-b border-b-slate-400 dark:bg-transparent  bg-white"
                  >
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {degree.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {degree.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Montserrat">
                      {degree.duration}
                    </td>
                    <td className="whitespace-nowrap space-x-2 px-3 py-4">
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <AiOutlineEdit onClick={() => handleEdit(degree)}/>
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <MdOutlineDelete
                          onClick={() => handleDelete(degree.id)}
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Redaktirlemek</h2>
            <label className="block mb-2">Spes</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              className="border border-gray-300 p-2 w-full mb-4"
            />
            <label className="block mb-2">Okuw dowamlylygy</label>
            <input
              type="text"
              value={editData.duration || ""}
              onChange={(e) =>
                setEditData({ ...editData, duration: e.target.value })
              }
              className="border border-gray-300 p-2 w-full mb-4"
            />
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Giriz
            </button>
            <button
              onClick={handleCloseModal}
              className="ml-2 bg-gray-500 text-white p-2 rounded"
            >
              Yza
            </button>
          </div>
        </div>
      )}
    </>
  );
}
