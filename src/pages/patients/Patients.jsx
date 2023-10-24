import React from "react";
import { Link } from "react-router-dom";
const patientsData = [
  {
    _id: "60a39f48c201e339284bbbf0", // Replace with a unique ObjectId
    name: "John Doe",
    age: 35,
    gender: "male",
    medicalHistory: true,
    contact: "123-456-7890",
    assignedWard: "60a39f48c201e339284bbbf9", // Replace with the actual ObjectId of a Ward document
  },
  {
    _id: "60a39f48c201e339284bbbf1", // Replace with a unique ObjectId
    name: "Alice Smith",
    age: 28,
    gender: "female",
    medicalHistory: false,
    contact: "987-654-3210",
    assignedWard: "60a39f48c201e339284bbbf9", // Replace with the actual ObjectId of a Ward document
  },
  {
    _id: "60a39f48c201e339284bbbf2", // Replace with a unique ObjectId
    name: "David Johnson",
    age: 45,
    gender: "male",
    medicalHistory: true,
    contact: "555-123-4567",
    assignedWard: "60a39f48c201e339284bbbf9", // Replace with the actual ObjectId of a Ward document
  },
  {
    _id: "60a39f48c201e339284bbbf3", // Replace with a unique ObjectId
    name: "Eva Williams",
    age: 32,
    gender: "female",
    medicalHistory: false,
    contact: "777-888-9999",
    assignedWard: "60a39f48c201e339284bbbf9", // Replace with the actual ObjectId of a Ward document
  },
  {
    _id: "60a39f48c201e339284bbbf4", // Replace with a unique ObjectId
    name: "Michael Brown",
    age: 50,
    gender: "male",
    medicalHistory: true,
    contact: "333-222-1111",
    assignedWard: "60a39f48c201e339284bbbf9", // Replace with the actual ObjectId of a Ward document
  },
];

export default function Patients() {
  return (
    <div>
      <ul>
        {patientsData.map((patient) => {
          return (
            <li key={patient._id}>
              <Link to={`patient/${patient._id}`}>{patient.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
