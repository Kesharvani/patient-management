import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./feature/patient/patientSlice";
const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});

export default store;
