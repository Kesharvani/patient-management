import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./feature/patient/patientSlice";
import wardSlice from "./feature/ward/WardSlice";
const store = configureStore({
  reducer: {
    patient: patientReducer,
    ward: wardSlice,
  },
});

export default store;
