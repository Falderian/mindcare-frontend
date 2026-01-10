import { Psychology } from "@mui/icons-material";
import type { SvgIconProps } from "@mui/material/SvgIcon";

export const AppIcon = ({
  color = "primary",
  fontSize = "large",
  ...props
}: SvgIconProps) => <Psychology color={color} fontSize={fontSize} {...props} />;
