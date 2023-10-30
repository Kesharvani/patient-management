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

export const addPatient = createAsyncThunk(
  "patient/addPatient",
  async (newPatient) => {
    const patient = await axios.post(
      "https://patientmanagementapplicationassignment21.allahabad.repl.co/patient",
      newPatient
    );
    return patient.data.patient;
  }
);

export const updatePatient = createAsyncThunk(
  "patient/updatePatient",
  async ({ id, updatedPatient }) => {
    const patient = await axios.put(
      `https://patientmanagementapplicationassignment21.allahabad.repl.co/patient/${id}`,
      updatedPatient
    );
    return patient.data.patient;
  }
);

export const deletePatient = createAsyncThunk(
  "patient/deletePatient",
  async (id) => {
    const patient = await axios.delete(
      `https://patientmanagementapplicationassignment21.allahabad.repl.co/patient/${id}`
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
    [addPatient.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients.push(action.payload);
    },
    [addPatient.pending]: (state) => {
      state.status = "loading";
    },
    [addPatient.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updatePatient.fulfilled]: (state, action) => {
      const updatePatient = action.payload;
      state.status = "success";
      const index = state.patients.findIndex(
        (item) => item._id === updatePatient._id
      );
      if (index !== -1) {
        state.patients[index] = updatePatient;
      }
    },
    [updatePatient.pending]: (state) => {
      state.status = "loading";
    },
    [updatePatient.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deletePatient.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = state.patients.filter(
        (patient) => patient._id !== action?.payload?._id
      );
    },
    [deletePatient.pending]: (state) => {
      state.status = "loading";
    },
    [deletePatient.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default patientSlice.reducer;
