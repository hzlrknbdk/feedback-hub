"use client";

import {
  ListItemText as MuiListItemText,
  ListItemTextProps,
  TypographyProps,
} from "@mui/material";
import { SIZES } from "@/styles";

type PrimaryTypographySlotProps = Partial<TypographyProps>;

interface CustomListItemTextProps
  extends Omit<ListItemTextProps, "primaryTypographyProps"> {
  active?: boolean;
}

export const ListItemText = ({
  sx,
  active = false,
  slotProps: externalSlotProps,
  ...rest
}: CustomListItemTextProps) => {
  const primaryStyles: PrimaryTypographySlotProps["sx"] = {
    fontSize: SIZES.fontSize.lg,
    fontWeight: active ? SIZES.fontWeight.medium : SIZES.fontWeight.normal,
  };

  return (
    <MuiListItemText
      {...rest}
      sx={sx}
      slotProps={{
        primary: {
          sx: primaryStyles,
          ...externalSlotProps?.primary,
        },
        ...externalSlotProps,
      }}
    />
  );
};
