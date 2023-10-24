import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  patients: [],
  status: "idle",
  error: null,
};

export const fetchPatient = createAsyncThunk(
  "patient/fetchPatient",
  async () => {
    const patient = await axios.get(
      "https://patientmanagementapplicationassignment21.allahabad.repl.co/patient"
    );
    return patient.data.patient;
  }
);

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPatient.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = action.payload;
    },
    [fetchPatient.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPatient.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default patientSlice.reducer;
