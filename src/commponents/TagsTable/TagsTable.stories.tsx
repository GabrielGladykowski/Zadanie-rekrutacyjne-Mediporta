import { Meta, StoryObj } from "@storybook/react";
import { TagsTable, TagsTableProps } from ".";
import { rowsData } from "../../data";

export default {
  title: "Components/TagsTable",
  component: TagsTable,
} as Meta<TagsTableProps>;

const Default: StoryObj<TagsTableProps> = {
  args: {
    rowsData: rowsData,
    isError: false,
    isLoading: false,
  },
};

const Error: Readonly<StoryObj<TagsTableProps>> = {
  args: {
    rowsData: rowsData,
    isError: true,
    isLoading: false,
  },
};

const Loading: Readonly<StoryObj<TagsTableProps>> = {
  args: {
    rowsData: rowsData,
    isError: false,
    isLoading: true,
  },
};

export { Default, Error, Loading };
