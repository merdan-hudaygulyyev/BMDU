import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import TableHeader from "../TableHeader/TableHeader";
import { createClassificators } from "../../api/services/apiHelpers";

export default function AddClassificators() {
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
        const response = await createClassificators(values);
        console.log("API Response Details:", response);

        localStorage.setItem("classificator", JSON.stringify(values));
        resetForm();
        navigate("/classific", { replace: true });
      } catch (error) {
        alert("An error occurred. Please try again later.");
      }
    },
  });

  return (
    <>
      <TableHeader title="Klassifikatorlary goşmak" />
      <div class="mx-7 my-7 bg-white rounded-lg">
        <div class="mt-3 text-center font-Quicksand font-medium text-[#AF47D2] text-2xl">
          Doldyrylmaly Anketa
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div class="p-8 ">
            <div class="flex gap-4 justify-center">
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-[#AF47D2] focus:outline-none focus:ring-1 focus:ring-[#AF47D2] sm:text-sm"
                placeholder="Doly ady *"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="mt-2 outline-none bg-[#AF47D2] hover:bg-[#772a8c] px-10 py-2 text-white uppercase rounded font-Quicksand tracking-wider"
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
