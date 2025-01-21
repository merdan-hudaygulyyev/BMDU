import {
  changeDepartment,
  deleteDepartment,
  fetchCafedras,
} from "../../../api/services/apiHelpers";
import { useState, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";
import TableHeader from "../../../components/TableHeader/TableHeader";
import Pagination from "../../../components/Pagination/Pagination";
import { fetchCafedraDetails } from "../../../api/services/View/view";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [cafedras, setCafedras] = useState([]);
  const [selectedCafedra, setSelectedCafedra] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getCafedras = async () => {
      try {
        const data = await fetchCafedras();
        setCafedras(data); // Set the fetched data
      } catch (error) {
        console.error("Failed to load cafedras:", error);
      }
    };
    getCafedras();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this?"
      );
      if (confirmDelete) {
        await deleteDepartment(id); // Pass the ID directly
        localStorage.removeItem("cafedra");
        setCafedras((prev) => prev.filter((caf) => caf.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete the department:", error);
    }
  };

  const handleViewDetails = async (id) => {
    try {
      const data = await fetchCafedraDetails(id);
      setSelectedCafedra(data);
      navigate(`/cafedra/${id}`);
    } catch (error) {
      console.error("Failed to fetch cafedra details:", error);
    }
  };

  const handleEdit = (caf) => {
    setEditData({
      id: caf.id,
      name: caf.name,
      abbreviation: caf.abbreviation || "",
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
        abbreviation: editData.abbreviation || "", // Send an empty string if abbreviation is missing
      };
      await changeDepartment(editData.id, updateData);
      setIsModalOpen(false);
      setCafedras((prev) =>
        prev.map((caf) =>
          caf.id === editData.id
            ? {
                ...caf,
                name: editData.name,
                abbreviation: editData.abbreviation || "",
              }
            : caf
        )
      );
    } catch (error) {
      console.error("Failed to update department:", error);
    }
  };

  return (
    <>
      <TableHeader title="Kafedralar /" href="/add-cafedras" />
      <div className="flex flex-col">
        <div className="py-2 mx-4">
          <table className="min-w-full text-center text-sm font-Montserrat dark:text-white">
            <thead className="border-b bg-white dark:bg-[#092635] font-medium dark:border-neutral-500 text-black dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Id
                </th>
                <th scope="col" className="px-6 py-4">
                  Kafedralar
                </th>
                <th scope="col" className="px-6 py-4">
                  Gysgaltmasy
                </th>
                <th scope="col" className="px-6 py-4">
                  Gyzlar
                </th>
                <th scope="col" className="px-6 py-4">
                  Jemi talyp sany
                </th>
                <th scope="col" className="px-6 py-4">
                  Oglanlar
                </th>
                <th scope="col" className="px-6 py-4">
                  Gurallar
                </th>
              </tr>
            </thead>
            <tbody>
              {cafedras.length > 0 ? (
                cafedras.map((caf) => (
                  <tr
                    key={caf.id}
                    className="border-b border-b-slate-400 dark:bg-transparent  bg-white"
                  >
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {caf.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {caf.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {caf.abbreviation}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {caf.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {caf.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {caf.id}
                    </td>
                    <td className="whitespace-nowrap space-x-2 px-3 py-4">
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <AiOutlineEdit onClick={() => handleEdit(caf)} />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <HiEye
                          onClick={() => {
                            handleViewDetails(caf.id);
                          }}
                        />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <MdOutlineDelete onClick={() => handleDelete(caf.id)} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-4">
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
            <label className="block mb-2">Kafedra</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              className="border border-gray-300 p-2 w-[400px] mb-4"
            />
            <label className="block mb-2">Gysgaltmasy</label>
            <input
              type="text"
              value={editData.abbreviation || ""}
              onChange={(e) =>
                setEditData({ ...editData, abbreviation: e.target.value })
              }
              className="border border-gray-300 p-2 w-[400px] mb-4"
            />
            <div className="flex justify-center">
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
        </div>
      )}
    </>
  );
}
