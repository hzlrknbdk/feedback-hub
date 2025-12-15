"use client";

import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { Box, InputBase, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { COLORS, SIZES, TRANSITIONS } from "@/styles";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  fullWidth?: boolean;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Search...",
  value: controlledValue,
  onChange,
  onSearch,
  fullWidth = true,
  className = "",
}: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState("");
  const isControlled = controlledValue !== undefined;
  const searchValue = isControlled ? controlledValue : internalValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(searchValue as string);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("search-bar-input")?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <Box
      className={className}
      sx={{
        width: fullWidth ? "100%" : "auto",
      }}
    >
      <InputBase
        id="search-bar-input"
        fullWidth
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                color: COLORS.text.tertiary,
                fontSize: SIZES.iconSizeSmall,
              }}
            />
          </InputAdornment>
        }
        sx={{
          height: SIZES.buttonHeight,
          px: SIZES.spacing.md,
          backgroundColor: COLORS.backgroundLight,
          border: `1px solid ${COLORS.border}`,
          borderRadius: SIZES.radius.md,
          fontSize: SIZES.fontSize.sm,
          transition: TRANSITIONS.smooth,
          "&:hover": {
            borderColor: COLORS.borderLight,
          },
          "&.Mui-focused": {
            backgroundColor: COLORS.background,
            borderColor: COLORS.primary,
            boxShadow: `0 0 0 3px ${COLORS.primaryLighter}`,
          },
          "& .MuiInputBase-input": {
            padding: 0,
            pl: SIZES.spacing.sm,
            "&::placeholder": {
              color: COLORS.text.tertiary,
              opacity: 1,
            },
          },
        }}
      />
    </Box>
  );
};
