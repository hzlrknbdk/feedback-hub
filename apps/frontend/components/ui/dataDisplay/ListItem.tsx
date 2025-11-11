"use client";

import { ListItem as MuiListItem, ListItemProps } from "@mui/material";

export const ListItem = ({ sx, children, ...rest }: ListItemProps) => {
  return (
    <MuiListItem
      {...rest}
      sx={{
        ...sx,
      }}
    >
      {children}
    </MuiListItem>
  );
};
