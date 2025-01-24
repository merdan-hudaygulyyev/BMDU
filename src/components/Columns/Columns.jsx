import { useState, useEffect } from "react";
import ColumnIcons from "../../components/icons/ColumnIcons";
import axios from "axios";

export default function Columns() {
  const [statistic, setStatistic] = useState([]);
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const token = "BMDU" + localStorage.getItem("access_token");

      const config = {
        headers: {
          Authorization: token,
        },
      };

      try {
        const response = await axios.get(
          "https://bmdu.depder.com/api/v1/root-dashboard/",
          config,
        );

        const data = await response.json();

        const fetchedStatistic = [
          {
            id: 1,
            path: "/insta",
            title: data.high_schools_count,
            text: "Ýokary okuw mekdepleri",
            type: "institute",
          },
          {
            id: 2,
            path: "/faculties",
            title: data.faculties_count,
            text: "Fakultet sany",
            type: "faculties",
          },
          {
            id: 3,
            path: "/nations",
            title: data.nationalities_count,
            text: "Millet sany",
            type: "nations",
          },
          {
            id: 4,
            path: "/cafedra",
            title: data.departments_count,
            text: "Kafedra sany",
            type: "cafedras",
          },
          {
            id: 5,
            path: "/apps",
            title: data.specializations_count,
            text: "Hünar sany",
            type: "apps",
          },
          {
            id: 6,
            path: "/student",
            title: data.students_count,
            text: "Jemi talyp sany",
            type: "result",
          },
          {
            id: 7,
            path: "#",
            title: data.male_students_count,
            text: "Jemi oglan sany",
            type: "boys",
          },
          {
            id: 8,
            path: "#",
            title: data.female_students_count,
            text: "Jemi gyz sany",
            type: "girls",
          },
        ];

        const fetchedFinished = [
          {
            id: 1,
            path: "/insta",
            title: data.finishedBoys,
            text: "Oglanlar",
            type: "boys",
          },
          {
            id: 2,
            path: "/insta",
            title: data.finishedGirls,
            text: "Gyzlar",
            type: "girls",
          },
        ];

        // Update the state with the fetched data
        setStatistic(fetchedStatistic);
        setFinished(fetchedFinished);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ul className="cursor-pointer min-h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full p-2">
      {statistic.map((posts) => (
        <a
          href={posts.path}
          key={posts.id}
          className="bg-white dark:text-white dark:bg-slate-700 dark:hover:bg-violet-400 rounded-lg shadow-xl hover:bg-white/60 max-w-[300px] max-h-[100px]  p-4 flex justify-between items-center"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-Poppins font-semibold">
              {posts.title}
            </h3>
            <p className="font-Montserrat">{posts.text}</p>
          </div>
          <span className="rounded-full p-2 bg-slate-500 text-white max-[769px]:hidden">
            <ColumnIcons type={posts.type} />
          </span>
        </a>
      ))}
    </ul>
  );
}
