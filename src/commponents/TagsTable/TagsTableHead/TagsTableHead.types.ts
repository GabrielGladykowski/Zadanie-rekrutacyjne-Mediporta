import { TagsTableDataType, ValueOf } from "../../../types";
import { ORDER } from "./TagsTableHead.constants";

export type TagsTableHeadCellsType = {
  id: keyof TagsTableDataType;
  label: string;
};

export type EnhancedTableHeadProps = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TagsTableDataType
  ) => void;
  order: ValueOf<typeof ORDER>;
  orderBy: string;
};
