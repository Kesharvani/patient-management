import React, { useEffect } from "react";
import { fetchPatient } from "../../feature/patient/patientSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Hospital() {
  const status = useSelector((state) => state.patient.status);
  const error = useSelector((state) => state.patient.error);
  const patientsData = useSelector((state) => state.patient.patients);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") dispatch(fetchPatient());
  }, [status, dispatch]);

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error:{error}</div>}
      <h2>Hospital-wide statistics</h2>
      <p>Total number of patients:{patientsData.length}</p>
    </div>
  );
}
