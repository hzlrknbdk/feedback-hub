// "use client";

// import React from "react";
// import { TextField, TextFieldProps } from "@mui/material";
// import { COLORS, SIZES } from "@/styles";

// interface TextareaProps extends Omit<TextFieldProps, "multiline" | "variant"> {
//   maxRows?: number;
//   minRows?: number;
//   textColor?: string;
//   placeholderColor?: string;
//   placeholderFontSize?: string | number;
// }

// export const Textarea = ({
//   maxRows = 2,
//   minRows = 2,
//   textColor = COLORS.text.primary,
//   placeholderColor = COLORS.text.tertiary,
//   placeholderFontSize = SIZES.fontSize.md,
//   sx,
//   value,
//   onChange,
//   onKeyDown,
//   ...rest
// }: TextareaProps) => {
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     if (e.key === "Enter") {
//       const lines = (value as string)?.split("\n").length || 1;
//       if (lines >= maxRows!) {
//         e.preventDefault();
//       }
//     }
//     onKeyDown?.(e);
//   };

//   return (
//     <TextField
//       multiline
//       minRows={minRows}
//       maxRows={maxRows}
//       variant="standard"
//       fullWidth
//       value={value}
//       onChange={onChange}
//       onKeyDown={handleKeyDown}
//       {...rest}
//       sx={{
//         "& .MuiInput-root": {
//           color: textColor,
//           overflow: "hidden",
//         },
//         "& .MuiInput-underline:before, & .MuiInput-underline:after": {
//           borderBottomColor: "transparent !important",
//         },
//         "& .MuiInput-root:hover .MuiInput-underline:before": {
//           borderBottomColor: `${COLORS.primaryLight} !important`,
//         },
//         "& .MuiInputBase-input": {
//           resize: "none",
//           overflow: "hidden",
//           color: textColor,
//           fontSize: SIZES.fontSize.md,
//         },
//         "& .MuiInputBase-input::placeholder": {
//           color: placeholderColor,
//           fontSize: placeholderFontSize,
//           opacity: 0.7,
//         },
//         ...sx,
//       }}
//     />
//   );
// };
