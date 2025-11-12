import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import TextFormatRoundedIcon from "@mui/icons-material/TextFormatRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import NumbersRoundedIcon from "@mui/icons-material/NumbersRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import FormatColorTextRoundedIcon from "@mui/icons-material/FormatColorTextRounded";
import TextIncreaseRoundedIcon from "@mui/icons-material/TextIncreaseRounded";
import AbcRoundedIcon from "@mui/icons-material/AbcRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import BurstModeRoundedIcon from "@mui/icons-material/BurstModeRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import UnfoldMore from "@mui/icons-material/UnfoldMore";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import RadioButtonChecked from "@mui/icons-material/RadioButtonChecked";
import AccessTime from "@mui/icons-material/AccessTime";
import ToggleOn from "@mui/icons-material/ToggleOn";
import { FormElement } from "@/lib/types/form";

export const FORM_ELEMENTS: FormElement[] = [
  { id: "heading", name: "Heading", icon: TitleRoundedIcon },
  { id: "fullName", name: "FullName", icon: TextFormatRoundedIcon },
  { id: "email", name: "Email Input", icon: MailOutlineRoundedIcon },
  { id: "phone", name: "Phone Input", icon: PermPhoneMsgRoundedIcon },
  { id: "address", name: "Address", icon: AddLocationAltRoundedIcon },
  { id: "number", name: "Number Input", icon: NumbersRoundedIcon },
  { id: "short_text", name: "Short Text", icon: FormatColorTextRoundedIcon },
  { id: "long_text", name: "Long Text", icon: TextIncreaseRoundedIcon },
  { id: "paragraph", name: "Paragraph", icon: AbcRoundedIcon },
  { id: "password", name: "Password", icon: VisibilityRoundedIcon },
  { id: "date", name: "Date Picker", icon: CalendarMonthRoundedIcon },
  { id: "time", name: "Time Picker", icon: AccessTime },
  {
    id: "select",
    name: "Select Dropdown",
    icon: FormatListBulletedRoundedIcon,
  },
  { id: "textarea", name: "Text Area", icon: EditNoteRoundedIcon },
  { id: "single_choice", name: "Single Choice", icon: RadioButtonChecked },
  {
    id: "multiple_choice",
    name: "Multiple Choice",
    icon: CheckBoxOutlinedIcon,
  },
  { id: "file", name: "File Upload", icon: CloudUploadOutlinedIcon },
  { id: "image", name: "Image Upload", icon: BurstModeRoundedIcon },
  { id: "switch", name: "Toggle Switch", icon: ToggleOn },
  { id: "spinner", name: "Spinner", icon: UnfoldMore },
  { id: "star_rating", name: "Star Rating", icon: StarHalfRoundedIcon },
  { id: "scale_rating", name: "Scale Rating", icon: BarChartRoundedIcon },
  { id: "divider", name: "Divider", icon: HorizontalRuleRoundedIcon },
];
