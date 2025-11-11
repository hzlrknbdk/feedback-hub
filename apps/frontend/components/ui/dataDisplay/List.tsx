"use client";

import { List as MuiList, ListProps } from "@mui/material";

export const List = ({
  sx,
  disablePadding = false,
  children,
  ...rest
}: ListProps) => {
  return (
    <MuiList
      disablePadding={disablePadding}
      {...rest}
      sx={{
        ...sx,
      }}
    >
      {children}
    </MuiList>
  );
};
