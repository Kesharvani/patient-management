import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PatientModal from "../../common/PatientModal";
import { fetchPatient } from "../../feature/patient/patientSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Patients() {
  const status = useSelector((state) => state.patient.status);
  const patientsData = useSelector((state) => state.patient.patients);
  const error = useSelector((state) => state.patient.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") dispatch(fetchPatient());
  }, [status, dispatch]);
  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error:{error}</div>}
      <ul>
        {patientsData?.map((patient) => {
          return (
            <li key={patient._id}>
              <Link to={`patient/${patient._id}`}>{patient.name}</Link>
            </li>
          );
        })}
      </ul>
      <PatientModal />
    </div>
  );
}
