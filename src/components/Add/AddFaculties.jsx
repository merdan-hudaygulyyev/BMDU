import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHighSchoolDetails } from "../../api/services/View/view";
  
export default function AddFaculties() {
  const { id } = useParams();
  const [schoolDetail, setSchoolDetail] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchHighSchoolDetails(id);
        setSchoolDetail(data);
      } catch (error) {
        console.error("Failed to fetch high school details:", error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!schoolDetail) {
    return <div>Loading...</div>;
  }

  return <div>{schoolDetail.name}</div>;
}
