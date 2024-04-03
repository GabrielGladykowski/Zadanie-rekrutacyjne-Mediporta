import { TagsTableDataType } from "./types";

const createData = (tagName: string, count: number): TagsTableDataType => ({
  nameTag: tagName,
  count: count,
});

export { createData };
