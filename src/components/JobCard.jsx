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

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

const JobCard = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

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

  const truncatedDetails = jobDetailsFromCompany
    .split(" ")
    .slice(0, 50)
    .join(" "); // Show first 50 words

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card sx={{ maxWidth: 300, padding: "10px", borderRadius: "15px" }}>
      <Chip
        label="Posted 10 days ago"
        icon={<HourglassBottomIcon color="warning" />}
      />
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
          Estimated Salary: {minJdSalary} - {maxJdSalary} LPA{" "}
          <CheckBoxIcon sx={{ color: "#29bf12" }} />
        </Typography>
        <Typography variant="subtitle1" component="p">
          About Company :
        </Typography>
        <Typography variant="body2" component="p">
          {showMore ? jobDetailsFromCompany : truncatedDetails}
          {/* Render "Show more" button only if job details are longer */}
          {jobDetailsFromCompany.length > 50 && (
            <button
              onClick={toggleShowMore}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "Highlight",
              }}
            >
              {showMore ? "Show less" : "...Show more"}
            </button>
          )}
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
          sx={{
            width: "100%",
            borderRadius: "10px",
            background: "#50ffb1",
            color: "black",
          }}
          variant="contained"
          startIcon={<ElectricBoltIcon sx={{ color: "yellow" }} />}
        >
          Easy Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
