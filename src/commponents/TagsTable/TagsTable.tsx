import {
  CircularProgress,
  Paper,
  Table,
  TablePagination,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { TagsTableHead } from "./TagsTableHead";
import { TagsTableBody } from "./TagsTableBody";
import ErrorIcon from "@mui/icons-material/Error";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "./TagsTable.server";
import { createData } from "./TagsTableBody/TagsTableBody.handlers";
import { TagsTableDataType } from "./TagsTable.types";
import { Order } from "./TagsTableHead/TagsTableHead.types";

type Fields = {
  count: number;
  name: string;
};

export type FieldsArray = {
  items: Fields[];
};

const ToolBarStateIcon: React.FC<{ isError: boolean }> = ({ isError }) =>
  isError ? <ErrorIcon color="error" /> : <CircularProgress size="28px" />;

const TagsTable: React.FC = () => {
  const { data, isLoading, isError } = useQuery<FieldsArray>({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] =
    React.useState<keyof TagsTableDataType>("count");

  const rowsData = data
    ? data?.items.map(({ name, count }) => createData(name, count))
    : ([] as TagsTableDataType[]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", maxWidth: "800px" }}>
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

      <Table>
        <TagsTableHead
          onRequestSort={(_: unknown, property: keyof TagsTableDataType) => {
            setOrderBy(property);
            setOrder((prev: Order) => (prev === "asc" ? "desc" : "asc"));
            console.log("property", property);
          }}
          order={order}
          orderBy={orderBy}
        />

        <TagsTableBody
          isLoading={isLoading}
          isError={isError}
          rows={rowsData}
          order={order}
          orderBy={orderBy}
          page={page}
          rowsPerPage={rowsPerPage}
        />

        <TablePagination
          rowsPerPageOptions={[5, 10, 30]}
          count={rowsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Table>
    </Paper>
  );
};

export { TagsTable };
