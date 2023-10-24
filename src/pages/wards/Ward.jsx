import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WardModal from "../../common/WardModal";
import { fetchWard } from "../../feature/ward/WardSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Ward() {
  const wardsData = useSelector((state) => state?.ward?.wards);
  const status = useSelector((state) => state?.ward?.status);
  const error = useSelector((state) => state?.ward?.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") dispatch(fetchWard());
  }, [status, dispatch]);
  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {error === "error" && <div>Error:{error}</div>}
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
