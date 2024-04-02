import "./App.css";
import { Global } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Layout } from "./commponents/Layout";
import { FieldsArray, TagsTable } from "./commponents/TagsTable";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "./server";
import { createData } from "./commponents/TagsTable/TagsTableBody/TagsTableBody.handlers";
import { TagsTableDataType } from "./commponents/TagsTable/TagsTable.types";
import { globalStyles } from "./globalStyles";

function App() {
  const { data, isLoading, isError } = useQuery<FieldsArray>({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  const rowsData = data
    ? data?.items.map(({ name, count }) => createData(name, count))
    : ([] as TagsTableDataType[]);

  return (
    <StyledEngineProvider injectFirst>
      <Global styles={globalStyles} />
      <Layout>
        <TagsTable
          isLoading={isLoading}
          isError={isError}
          rowsData={rowsData}
        />
      </Layout>
    </StyledEngineProvider>
  );
}

export default App;
