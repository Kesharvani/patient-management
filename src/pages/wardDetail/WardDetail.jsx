import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import WardModal from "../../common/WardModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteWard } from "../../feature/ward/WardSlice";
export default function WardDetail() {
  const wardsData = useSelector((state) => state?.ward?.wards);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const currentWard = wardsData.find((ward) => ward._id === id);
  const deleteHandler = (id) => {
    dispatch(deleteWard(id));
    navigate("/ward");
  };
  return (
    <div>
      <p>Ward Number:{currentWard?.wardNumber}</p>
      <p>Capacity:{currentWard?.capacity}</p>
      <p>specializations:{currentWard?.specializations}</p>
      <WardModal ward={currentWard} />
      <button onClick={() => deleteHandler(currentWard?._id)}>Delete</button>
    </div>
  );
}
