import { useState, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";
import TableHeader from "../../../components/TableHeader/TableHeader";
import { fetchHighSchools } from "../../../api/services/apiHelpers";
import Pagination from "../../../components/Pagination/Pagination";
import {
  fetchStudents,
  fetchViewStudents,
} from "../../../api/services/View/view";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [selectedSchool, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data); // Set the fetched data
      } catch (error) {
        console.error("Failed to load high schools:", error);
      }
    };
    getStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this?"
      );
      if (confirmDelete) {
        // Call the delete API
        localStorage.removeItem("students");
        // Remove the deleted school from the state
        setStudents((prevSchools) =>
          prevSchools.filter((student) => student.id !== id)
        );
      }
    } catch (error) {
      console.error("Failed to delete the school:", error);
    }
  };

  const handleViewDetails = async (id) => {
    try {
      const data = await fetchViewStudents(id);
      setSelectedStudent(data);
      navigate(`/student/${id}`);
    } catch (error) {
      console.error("Failed to fetch high school details:", error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TableHeader title="Talyplar /" href="/add-students" />
      <div className="flex flex-col">
        <div className="py-2 mx-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="float-right outline-none rounded-md mb-2 px-2 p-2"
            placeholder="Gözleg..."
          />
          <table className="min-w-full text-center text-sm font-Montserrat dark:text-white">
            <thead className="border-b bg-white dark:bg-[#363062] font-medium dark:border-neutral-500 text-black dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Id
                </th>
                <th scope="col" className="px-6 py-4">
                  Talyp
                </th>
                <th scope="col" className="px-6 py-4">
                  YOM
                </th>
                <th scope="col" className="px-6 py-4">
                  Kursy
                </th>
                <th scope="col" className="px-6 py-4">
                  Doglan ýyly
                </th>
                <th scope="col" className="px-6 py-4">
                  Gurallar
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-b-slate-400 dark:bg-transparent bg-white"
                  >
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {student.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Montserrat">
                      {student.full_name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {student.yom}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {student.specialization}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-Quicksand">
                      {student.birth_date}
                    </td>
                    <td className="whitespace-nowrap space-x-2 px-3 py-4">
                      {/* <button className="text-2xl text-black p-1 dark:text-white">
                        <AiOutlineEdit />
                      </button> */}
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <HiEye
                          onClick={() => {
                            handleViewDetails(student.id);
                          }}
                        />
                      </button>
                      <button className="text-2xl text-black p-1 dark:text-white">
                        <MdOutlineDelete
                          onClick={() => handleDelete(student.id)}
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
