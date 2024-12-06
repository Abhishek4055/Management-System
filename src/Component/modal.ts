import { HtmlHTMLAttributes } from "react";

export interface ToDoeModel {
  id: number;
  toDo: string;
  isDone: boolean;
}
export interface EmployeeListModel {
  id: number | undefined;
  imageUrl: string | undefined;
  fName: string | undefined;
  lName: string | undefined;
  age: string | undefined;
  email: string | undefined;
  dob: string | undefined;
  salary: any;
  address: string | undefined;
}

export interface OverlayModule {
  isVisible: boolean;
  onClose?: () => void;
  titel?: any;
  children?: React.ReactNode;
  isDisabled?: any;
}
