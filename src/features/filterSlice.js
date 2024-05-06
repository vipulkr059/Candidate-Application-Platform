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
      if (role || role === "") {
        state.role = role;
      }
      if (location || location === "") {
        state.location = location;
      }
      if (remote || remote === "") {
        state.remote = remote;
      }
      if (experience || experience === "") {
        state.experience = experience;
      }
      if (salary || salary === "") {
        state.salary = salary;
      }
      if (companyName || companyName === "") {
        state.companyName = companyName;
      }
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
