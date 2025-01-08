import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHighSchoolDetails } from "../../api/services/View/view";

const HighSchoolDetails = () => {
  const { id } = useParams(); // Get the school ID from the route
  const [schoolDetails, setSchoolDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchHighSchoolDetails(id); // Fetch details by ID
        setSchoolDetails(data);
      } catch (error) {
        console.error("Failed to fetch high school details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!schoolDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{schoolDetails.name}</h1>
      <p>Students: {schoolDetails.faculties}</p>
      <p>Kafedra: {schoolDetails.departments}</p>
      <p>Hunarler: {schoolDetails.specializations}</p>
    </div>
  );
};

export default HighSchoolDetails;
