import { Box, Link, Toolbar, Typography } from "@mui/material";
import { AppIcon } from "./AppIcon";
import { AppLinks } from "./AppLinks";
import { UserAvatar } from "./UserAvatar";

export const Header = () => {
  return (
    <Toolbar sx={{ minHeight: "3rem" }}>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <AppIcon />
            <Typography variant="h6">Mindcare</Typography>
          </Box>
          <AppLinks />
        </Box>
        <UserAvatar name="Tihon Bankai" />
      </Box>
    </Toolbar>
  );
};
