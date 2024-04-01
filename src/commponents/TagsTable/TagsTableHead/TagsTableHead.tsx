import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React from "react";
import { TagsTableHeadCells } from "./TagsTableHead.data";
import { v4 as uuid } from "uuid";
import { EnhancedTableHeadProps } from "./TagsTableHead.types";
import { TagsTableDataType } from "../TagsTable.types";

const TagsTableHead: React.FC<EnhancedTableHeadProps> = ({
  onRequestSort,
  order,
  orderBy,
}) => {
  const createSortHandler =
    (property: keyof TagsTableDataType) =>
    (event: React.MouseEvent<HTMLDivElement>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {TagsTableHeadCells.map(({ id, label }) => {
          return (
            <TableCell
              key={uuid()}
              align="right"
              padding="normal"
              sortDirection={orderBy === id ? order : false}
            >
              <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : "asc"}
                onClick={createSortHandler(id)}
              >
                {label}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export { TagsTableHead };
