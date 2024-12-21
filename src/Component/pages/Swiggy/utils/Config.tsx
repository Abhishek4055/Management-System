import { RiLuggageDepositFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

export const NEV_LIST = [
  {
    id: 1000,
    icon: <RiLuggageDepositFill size={20} className="inline" />,
    link: "Swiggy Corporate",
  },
  {
    id: 1001,
    icon: <BiSolidOffer size={20} className="inline" />,
    link: "Offer",
    subText: "New",
  },
  {
    id: 1002,
    icon: <FaHandsHelping size={20} className="inline" />,
    link: "Help",
  },
  {
    id: 1003,
    icon: <FaRegUser size={20} className="inline" />,
    link: "Sign in",
  },
  {
    id: 1004,
    icon: <FaCartArrowDown size={20} className="inline" />,
    link: "Cart",
  },
];

export const SWIGGYG_GET_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";
export const RESTRO_BASE_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550";
