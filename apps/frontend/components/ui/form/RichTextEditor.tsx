"use client";

import { useState } from "react";
import {
  Box,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  minHeight?: number;
  disabled?: boolean;
}

export const RichTextEditor = ({
  value = "",
  onChange,
  placeholder = "Metin girin...",
  minHeight = 200,
  disabled = false,
}: RichTextEditorProps) => {
  const [formats, setFormats] = useState<string[]>([]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <Paper
      sx={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ p: 1, backgroundColor: "#f8fafc" }}>
        <ToggleButtonGroup value={formats} onChange={handleFormat} size="small">
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5 }} />
          <ToggleButton value="list">
            <FormatListBulletedIcon />
          </ToggleButton>
          <ToggleButton value="numbered">
            <FormatListNumberedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        component="textarea"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange?.(e.target.value)
        }
        placeholder={placeholder}
        disabled={disabled}
        sx={{
          width: "100%",
          minHeight,
          p: 2,
          border: "none",
          outline: "none",
          fontFamily: "inherit",
          fontSize: "14px",
          resize: "vertical",
          "&:disabled": {
            backgroundColor: "#f8fafc",
            cursor: "not-allowed",
          },
        }}
      />
    </Paper>
  );
};
