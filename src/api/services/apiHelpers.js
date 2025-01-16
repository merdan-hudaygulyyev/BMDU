import { axiosInstance } from "../axiosinstance";

export const LoginFN = async (data) => {
  return axiosInstance
    .post("/v1/token/", data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("API Error:", error.response || error.message);
      throw error.response?.data || error.message;
    });
};

export const fetchHighSchools = async () => {
  return axiosInstance
    .get("/v1/high-schools/")
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error fetching high schools:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};

export const fetchCafedras = async () => {
  return axiosInstance
    .get("/v1/departments/")
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error fetching high schools:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};

export const fetchUsers = async () => {
  return axiosInstance
    .get("/v1/root-dashboard/")
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error fetching high schools:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};

export const createHighSchool = async (data) => {
  return axiosInstance
    .post("/v1/create-high-school/", data)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error creating high school:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};

export const createDepartment = async (data) => {
  return axiosInstance
    .post("/v1/departments/", data)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.response || error.message);
      throw error.response?.data || error.message;
    });
};

export const deleteDepartment = async (id) => {
  return axiosInstance
    .delete(`/v1/departments/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.response || error.message);
      throw error.response?.data || error.message;
    });
};

export const changeDepartment = async (id, data) => {
  return axiosInstance
    .put(`/v1/departments/${id}/`, data) // data should include both name and abbreviation
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.response || error.message);
      throw error.response?.data || error.message;
    });
};

export const createDegrees = async (data) => {
  return axiosInstance
    .post("/v1/degrees/", data)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error creating high school:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};

export const deleteDegrees = async (id) => {
  return axiosInstance
    .delete(`/v1/degrees/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.response || error.message);
      throw error.response?.data || error.message;
    });
};

export const changeDegrees = async (id, data) => {
  return axiosInstance
    .put(`/v1/degrees/${id}/`, data) // data should include both name and abbreviation
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.response || error.message);
      throw error.response?.data || error.message;
    });
};

export const createClassificators = async (data) => {
  return axiosInstance
    .post("/v1/create-classificator/", data)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error creating high school:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};

export const fetchDegrees = async (data) => {
  return axiosInstance
    .get("/v1/degrees/", data)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error creating high school:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};

export const fetchClassificators = async (data) => {
  return axiosInstance
    .get("/v1/classificators/", data)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error creating high school:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};

export const getHighSchoolEx = async (id) => {
  return axiosInstance
    .get(`v1/get-example/high-school/${id}/row-count/1/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        "Error fetching high schools:",
        error.response || error.message
      );
      throw error.response?.data || error.message;
    });
};
