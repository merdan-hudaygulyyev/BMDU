import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../components/Header/Header";
import img from "../../../public/images/ratingImg.png";
import { LoginFN } from "../../api/services/apiHelpers";

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await LoginFN({ ...values });

        console.log("API Response Details:", response);

        if (response?.access) {
          localStorage.setItem("access_token", response.access);
          localStorage.setItem("refresh_token", response.refresh);

          resetForm();
          navigate("/", { replace: true });
        } else {
          alert(
            response?.message || "Login failed. Please check your credentials."
          );
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  });

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex p-2 rounded-md hover:shadow-2xl transition-shadow bg-stone-50 max-w-full justify-center items-center">
          <div className="w-[500px] hidden md:block">
            <img src={img} />
          </div>
          <div className=" max-w-sm p-16 rounded-xl shadow-xl ">
            <h3 className="font-Montserrat text-3xl mb-8 text-nowrap">
              Hoş Geldiňiz!✋
            </h3>
            <p className="text-sm mb-3 font-Montserrat font-light text-nowrap">
              Içeri Girmek Üçin Şahsyňyzy Tassyklaň
            </p>
            <form onSubmit={formik.handleSubmit} className="text-center">
              <input
                className="text-sm w-full outline-none px-4 py-2 border border-solid border-gray-300 rounded"
                type="text"
                placeholder="Ulanyjynyň ady"
                value={formik.values.username}
                name="username"
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-red-500 text-[12px] -mt-[0.50rem] block">
                  Elektron salgyňyzy giriziň!
                </span>
              ) : null}
              <input
                className="text-sm w-full outline-none px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                placeholder="Açar sözi"
                value={formik.values.password}
                name="password"
                type="password"
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-red-500 text-[12px] -mt-[0.50rem] block">
                  Açar sözi giriziň!
                </span>
              ) : null}
              <button
                className="mt-4 outline-none border border-gray-500 px-6 py-2 text-gray-500 uppercase rounded font-Quicksand tracking-wider"
                type="submit"
              >
                Giriş
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
