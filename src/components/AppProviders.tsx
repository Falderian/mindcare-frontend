import { darkTheme, lightTheme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Paper, useMediaQuery } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AppProviders = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = prefersDarkMode ? darkTheme : lightTheme;
  return (
    <AppRouterCacheProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Paper sx={{ width: "100%", height: "100dvh" }}>{children}</Paper>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
