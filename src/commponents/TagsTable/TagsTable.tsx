import { Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { TagsTableHead } from "./TagsTableHead";

// type TagsTableType = {};

const TagsTable: React.FC = () => {
  return (
    <Paper sx={{ width: "100%" }}>
      <Toolbar>
        <Typography component="h1">
          Recruitment Task MediaPort - Tag Board
        </Typography>
      </Toolbar>
      <TagsTableHead onRequestSort={() => {}} order="asc" orderBy="count" />
    </Paper>
  );
};

export { TagsTable };
