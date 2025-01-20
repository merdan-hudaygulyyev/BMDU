import { useState, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";
import TableHeader from "../../../components/TableHeader/TableHeader";
import {
  changeNations,
  deleteNations,
  fetchNations,
} from "../../../api/services/apiHelpers";
import Pagination from "../../../components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

export default function Nations() {
  const [nations, setNations] = useState([]);
  const [selectedNation, setSelectedNation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getNations = async () => {
      try {
        const data = await fetchNations();
        setNations(data); // Set the fetched data
      } catch (error) {
        console.error("Failed to load high schools:", error);
      }
    };
    getNations();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this?"
      );
      if (confirmDelete) {
        await deleteNations(id);
        localStorage.removeItem("nations");
        setNations((prev) =>
          prev.filter((nat) => nat.id !== id)
        );
      }
    } catch (error) {
      console.error("Failed to delete the school:", error);
    }
  };

  // const handleViewDetails = async (id) => {
  //   try {
  //     const data = await fetchHighSchoolDetails(id);
  //     setSelectedSchool(data);
  //     navigate(`/insta/${id}`);
  //   } catch (error) {
  //     console.error("Failed to fetch high school details:", error);
  //   }
  // };

  const handleEdit = (nation) => {
    setEditData({
      id: nation.id,
      name: nation.name,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      const updateData = {
        name: editData.name,
      };
      await changeNations(editData.id, updateData);
      setIsModalOpen(false);
      setNations((prev) =>
        prev.map((nat) =>
          nat.id === editData.id
            ? {
                ...nat,
                name: editData.name,
              }
            : nat
        )
      );
    } catch (error) {
      console.error("Failed to update department:", error);
    }
  };

  return (
    <>
      <TableHeader title="Milletler /" href="/add-nations" />
      <div className="flex flex-col">
        <div className="py-2 mx-4">
          <table className="min-w-full text-center text-sm font-Montserrat dark:text-white">
            <thead className="border-b bg-white dark:bg-[#363062] font-medium dark:border-neutral-500 text-black dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Id
                </th>
                <th scope="col" className="px-6 py-4">
                  Ýokary okuw mekdepleri
                </th>
                <th scope="col" className="px-6 py-4">
                  Talyp
                </th>
                <th scope="col" className="px-6 py-4">
                  Oglan
                </th>
                <th scope="col" className="px-6 py-4">
                  Gyz
                </th>
                <th scope="col" className="px-6 py-4">
                  Gurallar
                </th>
              </tr>
            </thead>
            <tbody>
              {nations.length > 0 ? (
                nations.map((nat) => (
                  <tr
                    key={nat.id}
                    className="border-b border-b-slate-400 dark:bg-transparent bg-white"
                  >
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {nat.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Montserrat">
                      {nat.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {nat.students}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {nat.male_students}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {nat.female_students}
                    </td>
                    <td className="whitespace-nowrap space-x-2 px-3 py-4">
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <AiOutlineEdit onClick={() => handleEdit(nat)} />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <HiEye
                          onClick={() => {
                            handleViewDetails(nat.id);
                          }}
                        />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <MdOutlineDelete
                          onClick={() => handleDelete(nat.id)}
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
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Redaktirlemek</h2>
            <label className="block mb-2">Ýokary okuw jaýynyň ady</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
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
