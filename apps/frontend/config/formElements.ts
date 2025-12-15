import { FormElement } from "@/lib/types/forms";
import { FORM_ELEMENT_ICONS } from "@/config/icons";

export const FORM_ELEMENTS: FormElement[] = [
  { id: "heading", name: "Heading", icon: FORM_ELEMENT_ICONS.heading },
  { id: "fullName", name: "FullName", icon: FORM_ELEMENT_ICONS.fullName },
  { id: "email", name: "Email Input", icon: FORM_ELEMENT_ICONS.email },
  { id: "phone", name: "Phone Input", icon: FORM_ELEMENT_ICONS.phone },
  { id: "address", name: "Address", icon: FORM_ELEMENT_ICONS.address },
  { id: "number", name: "Number Input", icon: FORM_ELEMENT_ICONS.number },
  { id: "short_text", name: "Short Text", icon: FORM_ELEMENT_ICONS.shortText },
  { id: "long_text", name: "Long Text", icon: FORM_ELEMENT_ICONS.longText },
  { id: "paragraph", name: "Paragraph", icon: FORM_ELEMENT_ICONS.paragraph },
  { id: "password", name: "Password", icon: FORM_ELEMENT_ICONS.password },
  { id: "date", name: "Date Picker", icon: FORM_ELEMENT_ICONS.date },
  { id: "time", name: "Time Picker", icon: FORM_ELEMENT_ICONS.time },
  { id: "select", name: "Select Dropdown", icon: FORM_ELEMENT_ICONS.select },
  { id: "textarea", name: "Text Area", icon: FORM_ELEMENT_ICONS.textarea },
  {
    id: "single_choice",
    name: "Single Choice",
    icon: FORM_ELEMENT_ICONS.singleChoice,
  },
  {
    id: "multiple_choice",
    name: "Multiple Choice",
    icon: FORM_ELEMENT_ICONS.multipleChoice,
  },
  { id: "file", name: "File Upload", icon: FORM_ELEMENT_ICONS.file },
  { id: "image", name: "Image Upload", icon: FORM_ELEMENT_ICONS.image },
  { id: "switch", name: "Toggle Switch", icon: FORM_ELEMENT_ICONS.switch },
  { id: "spinner", name: "Spinner", icon: FORM_ELEMENT_ICONS.spinner },
  {
    id: "star_rating",
    name: "Star Rating",
    icon: FORM_ELEMENT_ICONS.starRating,
  },
  {
    id: "scale_rating",
    name: "Scale Rating",
    icon: FORM_ELEMENT_ICONS.scaleRating,
  },
  { id: "divider", name: "Divider", icon: FORM_ELEMENT_ICONS.divider },
];
