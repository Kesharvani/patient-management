import React from "react";
import { useParams } from "react-router-dom";
import PatientModal from "../../common/PatientModal";
import { useSelector } from "react-redux";
export default function PatientDetail() {
  const patientsData = useSelector((state) => state.patient.patients);
  const { id } = useParams();
  const currentPatient = patientsData.find((patient) => patient._id === id);
  return (
    <div>
      <h2>Patient Details</h2>
      <p>Name:{currentPatient.name}</p>
      <p>Age:{currentPatient.age}</p>
      <p>Gender:{currentPatient.gender}</p>
      <p>Is Medical History{currentPatient.medicalHistory}</p>
      <p>Contact:{currentPatient.contact}</p>
      <PatientModal patient={currentPatient} />
      <button>Delete</button>
    </div>
  );
}
