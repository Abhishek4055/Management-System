import { HtmlHTMLAttributes } from "react";

export interface ToDoeModel {
  id: number;
  toDo: string;
  isDone: boolean;
}
export interface EmployeeListModel {
  id: number;
  imageUrl: string;
  fName: string;
  lName: string;
  age: string;
  email: string;
  dob: string;
  salary: any;
  address: string;
}

export interface OverlayModule {
  isVisible: boolean;
  onClose?: () => void;
  titel?: any;
  children?: React.ReactNode;
  isDisabled?: any;
}
