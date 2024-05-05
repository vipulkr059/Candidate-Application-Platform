import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  filteredData: [],
  loading: false,
  error: null,
  offset: 0,
  limit: 10,
  hasMore: true,
};

//asynchronous action to fetch data from API
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async ({ offset, limit }) => {
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            limit,
            offset,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.jdList;
    } catch (error) {
      throw error;
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    applyFilters(state, action) {
      const { role, location, salary, remote, experience } = action.payload;
      const filteredData = state.data.filter((item) => {
        return (
          (!role || item.jobRole === role) &&
          (!location || item.location === location) &&
          (!salary || item.minJdSalary >= salary) &&
          (!experience || (item.minExp != null && item.minExp >= experience)) &&
          (!remote ||
            (remote === "onsite"
              ? item.location !== "remote"
              : item.location === remote))
        );
      });
      state.filteredData = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload];
        state.offset += state.limit; // Increment offset for next fetch
        state.hasMore = action.payload.length === state.limit; // Check if more data is available
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { applyFilters } = dataSlice.actions;
export default dataSlice.reducer;
