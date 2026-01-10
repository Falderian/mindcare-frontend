import { Box, Toolbar, Typography } from "@mui/material";
import { AppIcon } from "./AppIcon";

export const Header = () => {
  return (
    <Toolbar sx={{ minHeight: "3rem" }}>
      <Box display="flex" alignItems="center">
        <AppIcon />
        <Typography variant="h6">Mindcare</Typography>
      </Box>
    </Toolbar>
  );
};
