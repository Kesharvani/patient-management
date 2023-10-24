import React from "react";
import { useParams } from "react-router-dom";
import WardModal from "../../common/WardModal";
export default function WardDetail() {
  const wardsData = [
    {
      _id: "60a39f48c201e339284bbbf0", // Replace with a unique ObjectId
      wardNumber: 101,
      capacity: 20,
      specializations: "Pediatrics",
    },
    {
      _id: "60a39f48c201e339284bbbf1", // Replace with a unique ObjectId
      wardNumber: 102,
      capacity: 15,
      specializations: "Surgery",
    },
    {
      _id: "60a39f48c201e339284bbbf2", // Replace with a unique ObjectId
      wardNumber: 103,
      capacity: 10,
      specializations: "ICU",
    },
    {
      _id: "60a39f48c201e339284bbbf3", // Replace with a unique ObjectId
      wardNumber: 104,
      capacity: 25,
      specializations: "Pediatrics",
    },
    {
      _id: "60a39f48c201e339284bbbf4", // Replace with a unique ObjectId
      wardNumber: 105,
      capacity: 18,
      specializations: "Surgery",
    },
  ];
  const { id } = useParams();
  const currentWard = wardsData.find((ward) => ward._id === id);
  return (
    <div>
      <p>Ward Number:{currentWard.wardNumber}</p>
      <p>Capacity:{currentWard.capacity}</p>
      <p>specializations:{currentWard.specializations}</p>
      <WardModal ward={currentWard} />
      <button>Delete</button>
    </div>
  );
}
