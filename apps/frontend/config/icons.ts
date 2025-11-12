// Centralized icon management - Navigation + Form Elements
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import BackupTableRoundedIcon from "@mui/icons-material/BackupTableRounded";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

// Form Elements Icons
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

// Navigation Icons
export const NAVIGATION_ICONS = {
  dashboard: DashboardCustomizeOutlinedIcon,
  analytics: InsightsOutlinedIcon,
  forms: DynamicFormOutlinedIcon,
  notifications: NotificationsOutlinedIcon,
  popups: BackupTableRoundedIcon,
  surveys: WysiwygRoundedIcon,
  nps: RateReviewOutlinedIcon,
  responses: QuestionAnswerOutlinedIcon,
  integrations: IntegrationInstructionsOutlinedIcon,
  settings: SettingsSuggestOutlinedIcon,
  security: GppGoodOutlinedIcon,
  help: HelpOutlineOutlinedIcon,
} as const;

// Form Elements Icons
export const FORM_ELEMENT_ICONS = {
  heading: TitleRoundedIcon,
  fullName: TextFormatRoundedIcon,
  email: MailOutlineRoundedIcon,
  phone: PermPhoneMsgRoundedIcon,
  address: AddLocationAltRoundedIcon,
  number: NumbersRoundedIcon,
  shortText: FormatColorTextRoundedIcon,
  longText: TextIncreaseRoundedIcon,
  paragraph: AbcRoundedIcon,
  password: VisibilityRoundedIcon,
  date: CalendarMonthRoundedIcon,
  time: AccessTime,
  select: FormatListBulletedRoundedIcon,
  textarea: EditNoteRoundedIcon,
  singleChoice: RadioButtonChecked,
  multipleChoice: CheckBoxOutlinedIcon,
  file: CloudUploadOutlinedIcon,
  image: BurstModeRoundedIcon,
  switch: ToggleOn,
  spinner: UnfoldMore,
  starRating: StarHalfRoundedIcon,
  scaleRating: BarChartRoundedIcon,
  divider: HorizontalRuleRoundedIcon,
} as const;

// Backward compatibility
export const ICONS = NAVIGATION_ICONS;
