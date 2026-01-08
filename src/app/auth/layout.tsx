import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};

export default Layout;
