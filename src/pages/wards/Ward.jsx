import React from "react";
import { Link } from "react-router-dom";
import WardModal from "../../common/WardModal";
export default function Ward() {
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

  return (
    <div>
      <ul>
        {wardsData.map((ward) => {
          return (
            <li key={ward._id}>
              <Link to={`/ward/${ward._id}`}>
                Ward Number:-<b>{ward.wardNumber}</b>
              </Link>
            </li>
          );
        })}
      </ul>
      <WardModal />
    </div>
  );
}
