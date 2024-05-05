import React, { useEffect, useRef } from "react";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/dataSlice";
import FilterComponent from "./FilterComponent";

const CardGrid = () => {
  const dispatch = useDispatch();
  const { data, filteredData, loading, error, hasMore } = useSelector(
    (state) => state.data
  );
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, clientHeight, scrollHeight } = container;
      // Calculate the distance from the bottom of the container
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

      // Check if the user has scrolled close to the bottom (within 20 pixels)
      if (distanceFromBottom < 20 && hasMore && !loading) {
        // Dispatch fetchData with an updated offset
        dispatch(fetchData({ offset: data.length, limit: 10 }));
      }
    }
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    dispatch(fetchData({ offset: 0, limit: 10 }));
  }, [dispatch]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Add scroll event listener to the container
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <Container
      sx={{ padding: "20px" }}
      ref={containerRef}
      maxWidth="xl"
      style={{
        height: "100vh",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "8px",
      }}
    >
      <FilterComponent />
      <Grid container spacing={3}>
        {filteredData &&
          filteredData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <JobCard data={item} />
            </Grid>
          ))}

        {error && <p>Error: {error.message}</p>}
      </Grid>
      {loading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default CardGrid;
