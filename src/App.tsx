import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { Layout } from "./commponents/Layout";
import { TagsTable } from "./commponents/TagsTable";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "./server";
import { createData } from "./handlers";
import { FieldsArray, TagsTableDataType } from "./types";

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
