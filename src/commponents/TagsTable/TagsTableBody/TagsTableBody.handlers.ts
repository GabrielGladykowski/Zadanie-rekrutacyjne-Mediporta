const createData = (tagName: string, count: number) => ({
  tagName,
  count,
});

const emptyRows = (page: number, rows: unknown[], rowsPerPage: number) =>
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

export { createData, emptyRows };
