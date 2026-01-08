"use client"; // Add this to make the layout client-side for hooks

import { CssBaseline, Paper, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { darkTheme, lightTheme } from "@/utils/theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = prefersDarkMode ? darkTheme : lightTheme;
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Paper sx={{ width: "100%", height: "100dvh" }}>{children}</Paper>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
