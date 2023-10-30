import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  wards: [],
  status: "idle",
  error: null,
};

export const fetchWard = createAsyncThunk("ward/fetchWard", async () => {
  const ward = await axios.get(
    "https://patientmanagementapplicationassignment21.allahabad.repl.co/ward"
  );
  return ward.data.ward;
});

export const addWard = createAsyncThunk("ward/addWard", async (newWard) => {
  const ward = await axios.post(
    "https://patientmanagementapplicationassignment21.allahabad.repl.co/ward",
    newWard
  );
  return ward.data.ward;
});

export const updateWard = createAsyncThunk(
  "ward/updateWard",
  async ({ id, updatedWard }) => {
    const ward = await axios.put(
      `https://patientmanagementapplicationassignment21.allahabad.repl.co/ward/${id}`,
      updatedWard
    );
    return ward.data.ward;
  }
);

export const deleteWard = createAsyncThunk("ward/deleteWard", async (id) => {
  const ward = await axios.delete(
    `https://patientmanagementapplicationassignment21.allahabad.repl.co/ward/${id}`
  );
  return ward.data.ward;
});

export const wardSlice = createSlice({
  name: "ward",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWard.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = action.payload;
    },
    [fetchWard.pending]: (state) => {
      state.status = "loading";
    },
    [fetchWard.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addWard.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards.push(action.payload);
    },
    [addWard.pending]: (state) => {
      state.status = "loading";
    },
    [addWard.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateWard.fulfilled]: (state, action) => {
      const updateWard = action.payload;
      state.status = "success";
      const index = state.wards.findIndex(
        (item) => item._id === updateWard._id
      );
      if (index !== -1) {
        state.wards[index] = updateWard;
      }
    },
    [updateWard.pending]: (state) => {
      state.status = "loading";
    },
    [updateWard.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteWard.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = state.wards.filter(
        (ward) => ward._id !== action?.payload?._id
      );
    },
    [deleteWard.pending]: (state) => {
      state.status = "loading";
    },
    [deleteWard.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default wardSlice.reducer;
