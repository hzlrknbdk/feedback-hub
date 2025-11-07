"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

interface FileUploaderProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  onChange?: (files: File[]) => void;
  disabled?: boolean;
}

export const FileUploader = ({
  accept,
  multiple = false,
  maxSize = 10,
  onChange,
  disabled = false,
}: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setError("");

    const oversizedFiles = selectedFiles.filter(
      (file) => file.size > maxSize * 1024 * 1024,
    );

    if (oversizedFiles.length > 0) {
      setError(`Dosya boyutu ${maxSize}MB'dan küçük olmalıdır`);
      return;
    }

    const newFiles = multiple ? [...files, ...selectedFiles] : selectedFiles;
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  return (
    <Box>
      <Paper
        sx={{
          p: 3,
          textAlign: "center",
          border: "2px dashed #e2e8f0",
          backgroundColor: "#f8fafc",
          cursor: disabled ? "not-allowed" : "pointer",
          "&:hover": {
            backgroundColor: disabled ? "#f8fafc" : "#f1f5f9",
          },
        }}
      >
        <input
          accept={accept}
          style={{ display: "none" }}
          id="file-upload"
          multiple={multiple}
          type="file"
          onChange={handleFileChange}
          disabled={disabled}
        />
        <label htmlFor="file-upload">
          <Box sx={{ cursor: disabled ? "not-allowed" : "pointer" }}>
            <CloudUploadIcon sx={{ fontSize: 48, color: "#6366f1", mb: 1 }} />
            <Typography variant="body1" color="textSecondary">
              Dosya yüklemek için tıklayın veya sürükleyin
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Maksimum dosya boyutu: {maxSize}MB
            </Typography>
          </Box>
        </label>
      </Paper>

      {error && (
        <Typography
          color="error"
          variant="caption"
          sx={{ mt: 1, display: "block" }}
        >
          {error}
        </Typography>
      )}

      {files.length > 0 && (
        <List sx={{ mt: 2 }}>
          {files.map((file, index) => (
            <ListItem
              key={index}
              sx={{
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                mb: 1,
              }}
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => handleRemoveFile(index)}
                  disabled={disabled}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <InsertDriveFileIcon sx={{ mr: 2, color: "#6366f1" }} />
              <ListItemText
                primary={file.name}
                secondary={formatFileSize(file.size)}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
