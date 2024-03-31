import { TagsTableDataType } from "../TagsTable.types";

export type TagsTableHeadCellsType = {
  id: keyof TagsTableDataType;
  label: string;
  isNumeric: boolean;
};

export type Order = "asc" | "desc";

export type EnhancedTableHeadProps = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TagsTableDataType
  ) => void;
  order: Order;
  orderBy: string;
};
