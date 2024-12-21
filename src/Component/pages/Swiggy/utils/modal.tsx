import { HtmlHTMLAttributes } from "react";

export interface NEV_ITEM_MODAL {
  id: number;
  icon: any;
  link: string;
  subText?: string | undefined;
}
export interface CUISINS__CARD__MODAL {
  text: string;
  link: string;
}
export interface Restro__OBJECT__MODAL {
  collection_id: string | undefined;
  header_title: string | undefined;
  tags: string | undefined;
  type: string | undefined;
}
