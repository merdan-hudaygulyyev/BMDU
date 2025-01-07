import { useState, useEffect } from "react";
import { fetchUsers } from "../../api/services/apiHelpers";
import { statistic } from "../../assets/statsitic/statistics";
import ColumnIcons from "../../components/icons/ColumnIcons";

export default function Columns() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data); // Set the fetched data
      } catch (error) {
        console.error("Failed to load high schools:", error);
      }
    };
    getUsers();
  }, []);

  return (
    <ul className="cursor-pointer min-h-[300px] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full p-2">
      {statistic.map((posts) => (
        <a
          href={posts.path}
          key={posts.id}
          className="bg-white dark:text-white dark:bg-violet-400/25 dark:hover:bg-violet-400 rounded-lg shadow-xl hover:bg-white/60 max-w-[300px] max-h-[100px]  p-4 flex justify-between items-center"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-Poppins font-semibold">
              {posts.title}
            </h3>
            <p className="font-Montserrat">{posts.text}</p>
          </div>
          <span className="rounded-full p-2 bg-[#AF47D2] text-white max-[769px]:hidden">
            <ColumnIcons type={posts.type} />
          </span>
        </a>
      ))}
    </ul>
  );
}
