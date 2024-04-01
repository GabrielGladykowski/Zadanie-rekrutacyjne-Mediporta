import { CircularProgress, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { TagsTableHead } from "./TagsTableHead";
import { TagsTableBody } from "./TagsTableBody";
import ErrorIcon from "@mui/icons-material/Error";

type TagsTableType = {
  isLoading?: boolean;
  isError?: boolean;
};

const ToolBarStateIcon: React.FC<{ isError: boolean }> = ({ isError }) =>
  isError ? <ErrorIcon color="error" /> : <CircularProgress size="28px" />;

const TagsTable: React.FC<TagsTableType> = ({
  isLoading = true,
  isError = true,
}) => {
  return (
    <Paper sx={{ width: "100%" }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography color={isError ? "red" : undefined} component="h1">
          {isError
            ? "Problem with fetching data"
            : "Recruitment Task MediaPort - Tag Board"}
        </Typography>

        {isLoading || isError ? <ToolBarStateIcon isError={isError} /> : null}
      </Toolbar>

      <TagsTableHead onRequestSort={() => {}} order="asc" orderBy="count" />

      <TagsTableBody isLoading />
    </Paper>
  );
};

export { TagsTable };
