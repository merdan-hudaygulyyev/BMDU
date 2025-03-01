export default function TableHeader({ title, href }) {
  return (
    <div className="max-h-[50px] max-w-full h-screen p-2 m-2 mx-6">
      <div className="flex  gap-3 items-center">
        <h2 className="font-Quicksand font-medium text-gray-600 dark:text-white text-2xl">
          {title}
        </h2>
        {href && (
          <button className="flex gap-2 justify-center items-center outline-none rounded bg-slate-700 dark:bg-slate-600 px-5 pb-2 pt-2.5 text-xs font-medium uppercase text-white shadow-xl transition duration-150 ease-in-out hover:bg-slate-600 dark:hover:bg-slate-400">
            <a href={href}>Täze goş</a>
          </button>
        )}
      </div>
    </div>
  );
}
