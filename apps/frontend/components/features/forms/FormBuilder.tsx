import React, { FC } from "react";
import { Box } from "@mui/material";
import FormElementList from "./FormElementList";
import FormCanvas from "./FormCanvas";

const FormBuilder: FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
      <Box sx={{ flexShrink: 0 }}>
        <FormElementList />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          p: 3,
        }}
      >
        <FormCanvas />
      </Box>
    </Box>
  );
};

export default FormBuilder;
