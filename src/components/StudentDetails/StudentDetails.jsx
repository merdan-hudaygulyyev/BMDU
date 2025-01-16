import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { fetchViewStudents } from "../../api/services/View/view";
import { useParams } from "react-router-dom";

export default function StudentDetails() {
  const { id } = useParams();
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchViewStudents(id);
        setStudentDetails(data);
      } catch (error) {
        console.error("Failed to fetch high school details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!studentDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-h-screen md:dark:bg-[#363062] bg-none max-w-full rounded-lg overflow-y-auto overflow-x-hidden mx-9 my-6">
      <h2 className="font-Quicksand font-medium text-slate-600 dark:text-white text-xl">
        Talyp hasaba almak
      </h2>
      <div className="mt-6 m-1 p-4 bg-white rounded-lg shadow-md">
        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Doly ady
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.full_name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Jynsy
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.gender}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Maşgala ýagdaýy
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.family_status}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Töleg görnüşi
              </label>
              <input
                type="tel"
                disabled
                value={studentDetails.payment_type}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Doglan senesi
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.birth_date}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Okuwa giren senesi
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.admission_date}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ýazgyda duran salgysy
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.registered_place}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Telefon belgisi
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.phone_number}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Pasport seriýasy
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.passport}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Harby borç
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.military_service}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Label
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.label}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Milleti
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.nationality}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ýurdy
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.country}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Welaýaty
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.region}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Kursy
              </label>
              <input
                type="text"
                disabled
                value={studentDetails.specialization}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Bellikler
              </label>
              <input
                type="text"
                disabled
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
