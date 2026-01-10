// components/StringAvatar.tsx
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import React from "react";

interface StringAvatarProps {
  name: string;
}

export const UserAvatar: React.FC<StringAvatarProps> = ({ name }) => {
  const theme = useTheme();

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Avatar
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        width: 40,
        height: 40,
        fontWeight: "bold",
      }}
    >
      {initials}
    </Avatar>
  );
};
