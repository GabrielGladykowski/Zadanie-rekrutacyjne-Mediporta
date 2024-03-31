import { TagsTableDataType } from "../TagsTable.types";

const createSortHandler =
  (
    property: keyof TagsTableDataType,
    onRequestSort: (
      event: React.MouseEvent<unknown>,
      property: keyof TagsTableDataType
    ) => void
  ) =>
  (event: React.MouseEvent<HTMLDivElement>) => {
    onRequestSort(event, property);
  };

export { createSortHandler };
