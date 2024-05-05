import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  CardActions,
  Button,
  Chip,
} from "@mui/material";

const JobCard = ({ data }) => {
  const {
    companyName,
    jdLink,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    minJdSalary,
    maxJdSalary,
    salaryCurrencyCode,
    minExp,
  } = data;

  return (
    <Card sx={{ maxWidth: 300, padding: "10px", borderRadius: "15px" }}>
      <Chip label="Posted 10 days ago" />
      <CardHeader
        avatar={<Avatar src={logoUrl} />}
        title={
          <Typography variant="subtitle2" color="GrayText">
            {companyName}
          </Typography>
        }
        subheader={
          <>
            <Typography variant="body2" color="black">
              {jobRole.toUpperCase()}
            </Typography>
            <Typography variant="caption" color="black">
              {location.toUpperCase()}
            </Typography>
          </>
        }
      />
      <CardContent>
        <Typography variant="body2" color="GrayText" component="p">
          Estimated Salary: {minJdSalary} - {maxJdSalary} LPA
        </Typography>
        <Typography variant="body2" component="p">
          {jobDetailsFromCompany}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Minimum Experience
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {minExp} years
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          sx={{ width: "275px", borderRadius: "10px" }}
          variant="contained"
        >
          Easy Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
