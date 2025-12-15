export interface FormElement {
  id: string;
  name: string;
  icon: any;
}

export interface FormElementListProps {
  onElementSelect?: (element: FormElement) => void;
}
