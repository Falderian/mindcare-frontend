"use client";
import { Box, Link, useTheme } from "@mui/material";

export const AppLinks = () => {
  const theme = useTheme();
  const items = [
    {
      text: "Главная",
      link: "home",
    },
    {
      text: "Обо мне",
      link: "about",
    },
    {
      text: "Услуги",
      link: "services",
    },
    {
      text: "Контакты",
      link: "contacts",
    },
  ];

  const Links = items.map((i) => (
    <Link
      key={i.text}
      href={i.link}
      sx={{
        textDecoration: "none",
        color: theme.palette.mode === "light" ? "black" : "white",
        transition: "0.5s all",
        ":hover": {
          color: theme.palette.primary.main,
          borderBottomColor: theme.palette.primary.main,
        },
        borderBottom: `1px solid transparent`,
      }}
    >
      {i.text}
    </Link>
  ));

  return (
    <Box display="flex" alignItems="center" gap="1rem" pl="1rem">
      {Links}
    </Box>
  );
};
