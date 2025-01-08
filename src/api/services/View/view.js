import { axiosInstance } from "../../axiosinstance";

export const fetchHighSchoolDetails = async (high_school_id) => {
  return axiosInstance
    .get(`/v1/high-school/${high_school_id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching high schools:", error.response || error.message);
      throw error.response?.data || error.message;
    });
};
