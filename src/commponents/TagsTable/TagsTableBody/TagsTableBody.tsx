import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { Order } from "../TagsTableHead/TagsTableHead.types";
import { v4 as uuid } from "uuid";
import { getComparator, stableSort } from "../TagsTable.handlers";
import { TagsTableDataType } from "../TagsTable.types";

type TagsTableBody = {
  order: Order;
  orderBy: keyof TagsTableDataType;
  page: number;
  rowsPerPage: number;
  rows: TagsTableDataType[];
  isLoading?: boolean;
  isError?: boolean;
};

const TagsTableBody: React.FC<TagsTableBody> = ({
  order,
  orderBy,
  page,
  rowsPerPage,
  rows,
  isLoading = false,
  isError = false,
}) => {
  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <TableBody sx={{ width: "100%" }}>
      {isLoading || isError ? (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Array.from({ length: 5 }, (_) => (
          <TableRow key={uuid()}>
            <TableCell>
              <Skeleton
                width="100%"
                sx={isError ? { backgroundColor: "#ff6363" } : null}
                animation="pulse"
              />
            </TableCell>
            <TableCell>
              <Skeleton
                width="100%"
                sx={isError ? { backgroundColor: "#ff6363" } : null}
                animation="pulse"
              />
            </TableCell>
          </TableRow>
        ))
      ) : (
        <>
          {visibleRows.map((row) => (
            <TableRow key={uuid()}>
              <TableCell align="right">{row.nameTag}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </>
      )}
    </TableBody>
  );
};

export { TagsTableBody };
