import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchHighSchoolDetails } from "../../api/services/View/view";
import { highSchoolDetails } from "./highSchoolDetails";
import Charts from "../Charts/Charts";
import ResultColumn from "../Columns/ResultColumn";
import CapitalColumn from "../Columns/CapitalColumn";
import Footer from "../Footer/Footer";

const HighSchoolDetails = () => {
  const { id } = useParams();
  const [schoolDetails, setSchoolDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchHighSchoolDetails(id);
        setSchoolDetails(data);
      } catch (error) {
        console.error("Failed to fetch high school details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!schoolDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-h-screen md:dark:bg-[#363062] bg-none max-w-full rounded-lg overflow-y-auto overflow-x-hidden mx-9 my-6">
      <div className="mx-2.5">
        <h1 className="font-Quicksand font-medium text-slate-600 dark:text-white text-xl">
          {schoolDetails.name}
        </h1>
        <ul className="flex mt-4 gap-2">
          {highSchoolDetails.map((details) => (
            <li
              key={`${details.id}-${details.title}`}
              className={`pr-4 
                rounded-md p-2 text-gray-600 hover:underline dark:text-white cursor-pointer`}
            >
              {/* Dynamically replace :id in the path */}
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
      <div className="mt-10">
        <div className="ml-1">
          <ResultColumn />
        </div>
        <div className="mt-2 w-full max-h-screen">
          <Charts />
        </div>
        <div>
          <h1 className="font-Quicksand font-medium mt-10 ml-2.5 mb-4 text-slate-600 dark:text-white text-xl">
            Welaýatlar boýunça talyp sany
          </h1>
          <CapitalColumn />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HighSchoolDetails;
