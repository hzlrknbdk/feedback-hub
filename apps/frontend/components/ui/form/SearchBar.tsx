"use client";

import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { Box, InputBase, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  placeholder?: string;
  shortcut?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  fullWidth?: boolean;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Search...",
  shortcut = "Ctrl+K",
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

    onChange?.(newValue);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(searchValue);
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
        placeholder={`${placeholder} (${shortcut})`}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#94a3b8", fontSize: 20 }} />
          </InputAdornment>
        }
        sx={{
          height: 40,
          px: 2,
          backgroundColor: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: 2,
          fontSize: "0.875rem",
          transition: "all 0.2s",
          "&:hover": {
            borderColor: "#cbd5e1",
          },
          "&.Mui-focused": {
            backgroundColor: "white",
            borderColor: "#6366f1",
            boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
          },
          "& .MuiInputBase-input": {
            padding: 0,
            pl: 1,
          },
        }}
      />
    </Box>
  );
};
