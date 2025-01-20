import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import TableHeader from "../TableHeader/TableHeader";
import { createNations } from "../../api/services/apiHelpers";

export default function AddNations() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createNations(values);
        console.log("API Response Details:", response);

        localStorage.setItem("nations", JSON.stringify(values));
        resetForm();
        navigate("/nations", { replace: true });
      } catch (error) {
        alert("An error occurred. Please try again later.");
      }
    },
  });

  return (
    <>
      <TableHeader title="Millet goşmak" />
      <div class="mx-7 my-7 bg-white dark:bg-[#363062] rounded-lg">
        <div class="mt-3 text-center font-Quicksand font-medium text-slate-600 dark:text-white text-2xl">
          Doldyrylmaly Anketa
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div class="p-8 ">
            <div class="flex  flex-col">
              <label htmlFor="name">Millet</label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="mt-1 block  w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500  focus:outline-none focus:ring-1 sm:text-sm"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="mt-2 outline-none bg-slate-700 dark:bg-slate-600
                  hover:bg-slate-600 dark:hover:bg-slate-400 px-10 py-2 text-white uppercase rounded font-Quicksand tracking-wider"
                type="submit"
              >
                Giriz
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
