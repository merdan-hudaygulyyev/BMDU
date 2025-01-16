import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchHighSchoolDetails } from "../../api/services/View/view";
import { highSchoolDetails } from "../HighSchoolDetails/highSchoolDetails";
import Input from "../Input/Input";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import Footer from "../Footer/Footer";
import TableHeader from "../TableHeader/TableHeader";

export default function AddEachCafedra() {
  const { id } = useParams();
  const [schoolDetail, setSchoolDetail] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchDetails = async () => {
        try {
          const data = await fetchHighSchoolDetails(id);
          setSchoolDetail(data);
        } catch (error) {
          console.error("Failed to fetch high school details:", error);
        }
      };

      fetchDetails();
    } else {
      console.error("No id parameter provided in the route.");
    }
  }, [id]);

  if (!schoolDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10 max-h-screen md:dark:bg-[#363062] bg-none max-w-full rounded-lg overflow-y-auto overflow-x-hidden mx-9 my-6">
      <div className="mx-10 p-1">
        <h1 className="font-Quicksand font-medium ml-2.5 mb-4 text-slate-600 dark:text-white text-xl">
          {schoolDetail.name}
        </h1>
        <ul className="flex mt-4 gap-2">
          {highSchoolDetails.map((details) => (
            <li
              key={`${details.id}-${details.title}`}
              className={`pr-4 
             rounded-md p-2 hover:underline text-gray-600 dark:text-white cursor-pointer`}
            >
              {details.path !== "#" ? (
                <Link to={details.path.replace(":id", id)}>
                  {details.title}
                </Link>
              ) : (
                <span>{details.title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-5">
        <TableHeader title="Kafedra goşmak" />
        <Input />
        <div className="flex flex-col">
          <div className="py-2 mx-7">
            <table className="min-w-full text-center text-sm font-Montserrat dark:text-white">
              <thead className="border-b bg-white dark:bg-[#363062] font-medium dark:border-neutral-500 text-black dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-4">
                   Kafedra
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Fakulteti
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Gurallar
                  </th>
                </tr>
              </thead>
              <tbody className="border-b border-b-gray-500">
                <td className="whitespace-nowrap px-6 py-2 font-Quicksand ">
                  {schoolDetail.id}
                </td>
                <td className="whitespace-nowrap px-6 py-2 font-Montserrat">
                  {schoolDetail.departments}
                </td>
                <td className="whitespace-nowrap px-6 py-2 font-Montserrat">
                  {schoolDetail.faculties}
                </td>
                <td className="whitespace-nowrap space-x-2 px-3 py-4">
                  <button className="text-2xl text-black p-1 dark:text-white">
                    <AiOutlineEdit />
                  </button>
                  <button className="text-2xl text-black p-1 dark:text-white">
                    <MdOutlineDelete onClick={() => handleDelete(schoolDetail.id)} />
                  </button>
                </td>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
