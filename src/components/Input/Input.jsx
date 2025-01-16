import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import TableHeader from "../TableHeader/TableHeader";

export default function Input() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
    }),
    // onSubmit: async (values, { resetForm }) => {
    //   try {
    //     const response = await createHighSchool(values);
    //     console.log("API Response Details:", response);

    //     localStorage.setItem("high_schools", JSON.stringify(values));
    //     resetForm();
    //     navigate("/insta", { replace: true });
    //   } catch (error) {
    //     console.error("Error creating high school:", error);
    //     alert("An error occurred. Please try again later.");
    //   }
    // },
  });

  return (
    <>
      <div class="mx-7 my-7 bg-white dark:bg-[#363062] rounded-lg">
        <div className="mx-8 flex justify-end">
          <button className=" mt-4 outline-none bg-green-600 hover:bg-green-800 px-4 py-1 text-white uppercase rounded font-Quicksand tracking-wider">
            Excel
          </button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div class="p-8 ">
            <div class="flex gap-4">
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:outline-none focus:ring-1  sm:text-sm"
                placeholder="Doly ady *"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                className="mt-4 outline-none bg-gray-800 dark:bg-slate-600
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
