import React from "react";
import { Box } from "@mui/material";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      component="article"
      width="100vw"
      minHeight="100dvh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="20px"
    >
      {children}
    </Box>
  );
};

export { Layout };
