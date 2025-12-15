"use client";

import React, { FC, useState, useMemo } from "react";
import { Box, Card, Typography } from "@mui/material";
import { SearchBar } from "@/components/ui/form/fields/SearchBar";
import { FormElement } from "@/lib/types/form";
import { FORM_ELEMENTS } from "@/config/formElements";
import { COLORS, SIZES, TRANSITIONS, SHADOWS } from "@/styles";
import type { ChangeEvent } from "react";

interface FormElementListProps {
  onElementSelect?: (element: FormElement) => void;
}

const FormElementList: FC<FormElementListProps> = ({ onElementSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredElements = useMemo(
    () =>
      FORM_ELEMENTS.filter((el) =>
        el.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Card
      sx={{
        width: 340,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        borderRadius: SIZES.radius.md,
        boxShadow: SHADOWS.sm,
      }}
    >
      <Box
        sx={{ p: SIZES.spacing.md, borderBottom: `1px solid ${COLORS.border}` }}
      >
        <Typography
          sx={{
            mb: SIZES.spacing.md,
            fontSize: SIZES.fontSize["2xl"],
            fontWeight: SIZES.fontWeight.medium,
          }}
        >
          + Components
        </Typography>
        <SearchBar
          placeholder="Search components"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          p: SIZES.spacing.md,
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            background: COLORS.scrollbar,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
            borderRadius: SIZES.radius.md,
            transition: TRANSITIONS.color,
          },
          "&:hover::-webkit-scrollbar-thumb": {
            background: COLORS.primaryLight,
          },
        }}
      >
        {filteredElements.length > 0 ? (
          <ElementGrid
            elements={filteredElements}
            onElementSelect={onElementSelect}
          />
        ) : (
          <EmptyState />
        )}
      </Box>
    </Card>
  );
};

interface ElementGridProps {
  elements: FormElement[];
  onElementSelect?: (element: FormElement) => void;
}

const ElementGrid: FC<ElementGridProps> = ({ elements, onElementSelect }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: SIZES.spacing.sm,
    }}
  >
    {elements.map((element) => (
      <ElementCard
        key={element.id}
        element={element}
        onSelect={onElementSelect}
      />
    ))}
  </Box>
);

interface ElementCardProps {
  element: FormElement;
  onSelect?: (element: FormElement) => void;
}

const ElementCard: FC<ElementCardProps> = ({ element, onSelect }) => {
  const IconComponent = element.icon;

  return (
    <Box
      onClick={() => onSelect?.(element)}
      sx={{
        bgcolor: COLORS.background,
        border: `1.5px solid ${COLORS.border}`,
        borderRadius: SIZES.radius.lg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        cursor: "pointer",
        transition: TRANSITIONS.smooth,
        minHeight: 100,
        p: SIZES.spacing.sm,
        "&:hover": {
          borderColor: COLORS.primaryLight,
          boxShadow: SHADOWS.md,
          transform: "translateY(-2px)",
          "& .MuiSvgIcon-root": {
            color: COLORS.primaryLight,
            fill: COLORS.primaryLight,
          },
          "& .element-text": {
            color: COLORS.primaryLight,
          },
        },
      }}
    >
      <IconComponent />
      <Typography
        className="element-text"
        sx={{
          fontSize: SIZES.fontSize.sm,
          fontWeight: SIZES.fontWeight.medium,
          color: COLORS.text.secondary,
          textAlign: "center",
          transition: TRANSITIONS.color,
        }}
      >
        {element.name}
      </Typography>
    </Box>
  );
};

const EmptyState: FC = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
    <Typography sx={{ color: COLORS.text.tertiary }}>
      No components found
    </Typography>
  </Box>
);

export default FormElementList;
