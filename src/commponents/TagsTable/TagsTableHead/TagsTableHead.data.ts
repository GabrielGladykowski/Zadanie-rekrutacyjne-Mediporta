import { TagsTableHeadCellsType } from "./TagsTableHead.types";

const TagsTableHeadCells = [
  {
    id: "nameTag",
    label: "Tags Name",
    isNumeric: false,
  },
  {
    id: "count",
    label: "Post Count",
    isNumeric: true,
  },
] as TagsTableHeadCellsType[];

export { TagsTableHeadCells };
