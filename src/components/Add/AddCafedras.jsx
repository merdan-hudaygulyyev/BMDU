import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import TableHeader from "../TableHeader/TableHeader";
import { createDepartment } from "../../api/services/apiHelpers";

export default function AddCafedras() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      abbreviation: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      abbreviation: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createDepartment(values);
        console.log("API Response Details:", response);

        localStorage.setItem("cafedras", JSON.stringify(values));
        resetForm();
        navigate("/cafedra", { replace: true });
      } catch (error) {
        alert("An error occurred. Please try again later.");
      }
    },
  });

  return (
    <>
      <TableHeader title="Kafedralary goşmak" />
      <div class="mx-7 my-7 bg-white dark:bg-[#092635] rounded-lg">
        <div class="mt-3 text-center font-Quicksand font-medium text-slate-600 dark:text-white text-2xl">
          Doldyrylmaly Anketa
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div class="p-8 ">
            <div class="flex gap-4">
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500  focus:outline-none focus:ring-1 sm:text-sm"
                placeholder="Doly ady *"
              />
              <input
                type="text"
                name="abbreviation"
                onChange={formik.handleChange}
                value={formik.values.abbreviation}
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500  focus:outline-none focus:ring-1 sm:text-sm"
                placeholder="Gysgaltmasy *"
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
