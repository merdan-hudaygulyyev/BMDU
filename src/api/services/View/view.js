import { axiosInstance } from "../../axiosinstance";

export const fetchHighSchoolDetails = async (id) => {
  return axiosInstance
    .get(`/v1/high-school/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching high schools:", error.response || error.message);
      throw error.response?.data || error.message;
    });
};

export const fetchViewStudents = async (id) => {
  return axiosInstance
    .get(`/v1/student/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching high schools:", error.response || error.message);
      throw error.response?.data || error.message;
    });
};

export const fetchStudents = async (id) => {
  return axiosInstance
    .get(`/v1/students/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching high schools:", error.response || error.message);
      throw error.response?.data || error.message;
    });
};
