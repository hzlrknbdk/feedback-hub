import {
  ListItemText as MuiListItemText,
  ListItemTextProps,
  TypographyProps,
} from "@mui/material";

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
    fontSize: "1rem",
    fontWeight: active ? 500 : 400,
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
