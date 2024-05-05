import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/dataSlice";

const CardGrid = () => {
  const dispatch = useDispatch();
  const { data, loading, error, hasMore } = useSelector((state) => state.data);

  useEffect(() => {
    // Fetch initial data when the component mounts
    dispatch(fetchData({ offset: 0, limit: 10 }));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Grid container spacing={3}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <JobCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
