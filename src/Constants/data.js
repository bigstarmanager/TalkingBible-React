import V1 from "../assests/v1.png";
import V2 from "../assests/v2.png";
import Frame from "../assests/Frame.png";
import V4 from "../assests/v4.png";
import V5 from "../assests/v5.png";
import V6 from "../assests/v6.png";
import V7 from "../assests/v6.png";
import V8 from "../assests/v8.png";
import image1 from "../assests/image1.png";
import f11 from "../assests/black-blue.png";
import f12 from "../assests/seagreen-blue (1).png";
import f13 from "../assests/seagreen-blue (1).png";

import image2 from "../assests/image3.png";
import image3 from "../assests/image3.png";
import image4 from "../assests/image4.png";
import footImage1 from "../assests/Layer_0_6_.png";
import footImage2 from "../assests/ff3.png";
import foooterImage3 from "../assests/Layer_0_4_.png";

const navData = [
  {
    title: "About us",
    id: "aboutus",
    color: "rgb(253,249,248)",
    icon: V1,
  },
  {
    title: "What do we do",
    color: "rgb(100,158,152)",
    icon: V1,
    id: "aboutus",
  },
  {
    title: "Testionials",
    color: "rgb(253,249,248)",
    icon: V4,
    id: "Testionials",
  },
  {
    title: "Listen ",
    id: "Listen",
    icon: V7,
  },
  {
    title: "New Letter ",
    icon: V5,
    id: "newsLetter",
  },
  {
    title: "Blog ",
    id: "blog",
    icon: V5,
  },
  {
    title: "Store  ",
    icon: V8,
  },
  {
    title: "Donate ",
    icon: V8,
    id: "newsLetter",
  },
];

const storedata = [
  {
    first: "DONATE ",
    sec: "BRING THE AUDIBLE",
    third: "WORD OF GOD",
    fourth: "TO MILLIONS.",
    title: ` `,
    help: "Help us to do much more",
    color: "rgb(92,78,104)",
    bg: f11,
    text: "DONATE AND BRING THE AUDIBLE WORD OF GODTO MILLIONS.",
  },
  {
    first: "VISIT OUR STORE",
    sec: "AND GET YOUR",
    third: "OWN TALKING",
    fourth: "BIBLE.",
    title: "",
    bg: f13,

    help: "When you buy you’re helping",
    color: "rgb(119,179,172)",
    text: "VISIT OUR STORE AND GET YOUR OWN TALKING BIBLE.",
  },
  {
    first: "SUBSCRIBE TO",
    sec: "OUR NEWSLETTER",
    third: "AND BE PART OF",
    fourth: " OUR COMMUNITY.",
    text: "SUBSCRIBE TO OUR NEWSLETTER AND BE PART OF OUR COMMUNITY.",
    title: "",
    bg: f12,
    help: "Write your E-mail here ",
    color: "rgb(238,201,118)",
  },
];

const aboutUs = [
  { title: "WHAT WE DO", image: image1 },
  {
    first: "HOW",
    second: "ITS WORK",
    title: "HOW  ITS WORK",
    image: image4,
  },
  { title: "31 YEAR OF MINISTRY", image: image3 },
];
const footerImage = [footImage1, foooterImage3, footImage2];
export { navData, storedata, aboutUs, footerImage };
