import React from "react";
import { useParams } from "react-router-dom";
import PatientModal from "../../common/PatientModal";
import { useSelector, useDispatch } from "react-redux";
import { deletePatient } from "../../feature/patient/patientSlice";
import { useNavigate } from "react-router-dom";
export default function PatientDetail() {
  const patientsData = useSelector((state) => state.patient.patients);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentPatient = patientsData.find((patient) => patient._id === id);
  if (!currentPatient) {
    return <div>Patient not found</div>;
  }
  const deleteHandler = (id) => {
    dispatch(deletePatient(id));
    navigate("/");
  };
  return (
    <div>
      <h2>Patient Details</h2>
      <p>Name:{currentPatient?.name}</p>
      <p>Age:{currentPatient?.age}</p>
      <p>Gender:{currentPatient?.gender}</p>
      <p>Is Medical History{currentPatient?.medicalHistory}</p>
      <p>Contact:{currentPatient?.contact}</p>
      <PatientModal patient={currentPatient} />
      <button onClick={() => deleteHandler(currentPatient?._id)}>Delete</button>
    </div>
  );
}
