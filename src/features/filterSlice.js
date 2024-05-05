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
      if (role) {
        state.role = role;
      }
      if (location) {
        state.location = location;
      }
      if (remote) {
        state.remote = remote;
      }
      if (experience) {
        state.experience = experience;
      }
      if (salary) {
        state.salary = salary;
      }
      if (companyName) {
        console.log(companyName);
        state.companyName = companyName;
      }
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
