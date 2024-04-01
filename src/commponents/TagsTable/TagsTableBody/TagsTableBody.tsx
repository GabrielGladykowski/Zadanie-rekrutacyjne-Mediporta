import { Skeleton, TableBody, TableCell, TableRow } from "@mui/material";
// import { useQuery } from "@tanstack/react-query";
import React from "react";
// import { fetchTags } from "../TagsTable.server";
import { Order } from "../TagsTableHead/TagsTableHead.types";
import { v4 as uuid } from "uuid";

type TagsTableBody = {
  order?: Order;
  orderBy?: string;
  page?: number;
  rowsPerPage?: number;
  rows?: unknown[];
  isLoading?: boolean;
  isError?: boolean;
};

const TagsTableBody: React.FC<TagsTableBody> = ({
  // order,
  // orderBy,
  // page,
  // rowsPerPage,
  // rows,
  isLoading = false,
  isError = false,
}) => {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["tags"],
  //   queryFn: fetchTags,
  // });

  // const visibleRows = React.useMemo(
  //   () =>
  //     stableSort(rows, getComparator(order, orderBy)).slice(
  //       page * rowsPerPage,
  //       page * rowsPerPage + rowsPerPage
  //     ),
  //   [order, orderBy, page, rowsPerPage]
  // );

  // console.log("data", data);
  // console.log("isLoading", isLoading);
  // console.log("isError", isError);

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
        <></>
      )}
    </TableBody>
  );
};

export { TagsTableBody };
