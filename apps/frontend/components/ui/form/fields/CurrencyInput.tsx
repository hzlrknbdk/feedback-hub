// "use client";

// import { TextField } from "../inputs/TextField";
// import { TextFieldProps } from "@mui/material";
// import { InputAdornment } from "@mui/material";

// interface CurrencyInputProps extends Omit<TextFieldProps, "onChange"> {
//   value?: string | number;
//   onChange?: (value: string) => void;
//   currency?: string;
//   locale?: string;
// }

// export const CurrencyInput = ({
//   value = "",
//   onChange,
//   currency = "TRY",
//   locale = "tr-TR",
//   ...rest
// }: CurrencyInputProps) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = e.target.value.replace(/[^\d,]/g, "");
//     onChange?.(inputValue);
//   };

//   const getCurrencySymbol = () => {
//     const symbols: Record<string, string> = {
//       TRY: "₺",
//       USD: "$",
//       EUR: "€",
//       GBP: "£",
//     };
//     return symbols[currency] || currency;
//   };

//   return (
//     <TextField
//       {...rest}
//       value={value}
//       onChange={handleChange}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             {getCurrencySymbol()}
//           </InputAdornment>
//         ),
//         ...rest.InputProps,
//       }}
//     />
//   );
// };
