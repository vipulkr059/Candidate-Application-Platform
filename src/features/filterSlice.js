import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
  location: "",
  experience: "",
  remote: "",
  salary: "",
  companyName: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters(state, action) {
      const { role, location, remote, experience, salary, companyName } =
        action.payload;
      state.role = role ? role : "";

      state.location = location ? location : "";

      state.remote = remote ? remote : "";

      state.experience = experience ? experience : "";

      state.salary = salary ? salary : "";

      state.companyName = companyName ? companyName : "";
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
