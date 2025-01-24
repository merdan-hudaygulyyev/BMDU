import { useEffect, useState } from "react";
import { finished } from "../../assets/statsitic/statistics";
import FootColumnIcons from "../icons/FootColumnIcons";
import axios from "axios";

export default function FootColumns() {
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const token = "BMDU " + localStorage.getItem("access_token");

      const config = {
        headers: {
          Authorization: token,
        },
      };

      try {
        const response = await fetch(
          "https://bmdu.depder.com/api/v1/root-dashboard/",
          config,
        );

        const data = await response.json();

        const fetchedFinished = [
          {
            id: 1,
            path: "/insta",
            title: data.male_graduates,
            text: "Oglanlar",
            type: "boys",
          },
          {
            id: 2,
            path: "/insta",
            title: data.female_graduates,
            text: "Gyzlar",
            type: "girls",
          },
        ];

        // Update the state with the fetched data
        setFinished(fetchedFinished);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ul className="cursor-pointer min-h-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full p-2">
      {finished.map((posts) => (
        <a
          href="#"
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
            <FootColumnIcons type={posts.type} />
          </span>
        </a>
      ))}
    </ul>
  );
}
