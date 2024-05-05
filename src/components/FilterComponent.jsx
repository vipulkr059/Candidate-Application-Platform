import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TextField,
} from "@mui/material";
import { setFilters } from "../features/filterSlice";

const FilterComponent = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    dispatch(setFilters({ [name]: value ? value : null }));
  };
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      padding={5}
    >
      <Grid item xs={12} sm={6} md={2}>
        <FormControl fullWidth>
          <InputLabel id="role-label">Roles</InputLabel>
          <Select
            label="Roles"
            labelId="role-label"
            id="role-select"
            name="role"
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="frontend">Frontend</MenuItem>
            <MenuItem value="backend">Backend</MenuItem>
            <MenuItem value="android">Android</MenuItem>
            <MenuItem value="ios">IOS</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <FormControl fullWidth>
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            label="Location"
            labelId="location-label"
            id="location-select"
            name="location"
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="delhi ncr">Delhi NCR</MenuItem>
            <MenuItem value="banglore">Banglore</MenuItem>
            <MenuItem value="mumbai">Mumbai</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <FormControl fullWidth>
          <InputLabel id="experience-label">Experience</InputLabel>
          <Select
            label="Experience"
            labelId="experience-label"
            id="experience-select"
            name="experience"
            onChange={handleFilterChange}
          >
            <MenuItem defaultValue={0}>All</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={1}>
        <FormControl fullWidth>
          <InputLabel id="remote-label">Remote</InputLabel>
          <Select
            label="Remote"
            labelId="remote-label"
            id="remote-select"
            name="remote"
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="onsite">On-site</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <FormControl fullWidth>
          <InputLabel id="salary-label">Min Base Pay Salary</InputLabel>
          <Select
            label="Min Base Pay Salary"
            labelId="salary-label"
            id="salary-select"
            name="salary"
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="1">1L</MenuItem>
            <MenuItem value="2">2L</MenuItem>
            <MenuItem value="3">3L</MenuItem>
            <MenuItem value="4">4L</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Search Company Name"
            variant="outlined"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterComponent;
