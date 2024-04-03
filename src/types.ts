export type TagsTableDataType = {
  nameTag: string;
  count: number;
};

type Fields = {
  count: number;
  name: string;
};

export type FieldsArray = {
  items: Fields[];
};

export type ValueOf<T> = T[keyof T];
