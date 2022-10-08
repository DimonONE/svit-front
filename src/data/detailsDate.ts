import GlassImg from "../assets/images/sockets/glass.png";
import BoardImg from "../assets/images/sockets/board.png";
import FameTroughImg from "../assets/images/sockets/frame-trough.png";
import FrameIMG from "../assets/images/sockets/frame.png";
import TroughIMG from "../assets/images/sockets/trough.png";
import TroughWithoutFrameIMG from "../assets/images/sockets/trough-without-frame.png";
import RoundaboutIMG from "../assets/images/sockets/roundabout.png";
import { Detail } from "../types/detailsType";

export const detailsData: Detail[] = [
  {
    id: 1,
    image: GlassImg,
    margin: 0,
    info: [
      {
        id: 1,
        linePicture: {
          pX: 0,
          pY: 0,
          widthLine: 200,
        },
        textInfo: "textInfo",
      },
    ],
  },
  {
    id: 2,
    image: BoardImg,
    margin: 0,
    info: [
      {
        id: 1,
        linePicture: {
          pX: 0,
          pY: 0,
          widthLine: 100,
        },
        textInfo: "textInfo",
      },
    ],
  },
  {
    id: 3,
    image: FrameIMG,
    imagePrev: FameTroughImg,
    margin: 0,
    info: [
      {
        id: 1,
        linePicture: {
          pX: 0,
          pY: 0,
          widthLine: 100,
        },
        textInfo: "textInfo",
      },
    ],
  },
  {
    id: 4,
    image: RoundaboutIMG,
    imagePrev: TroughWithoutFrameIMG,
    margin: 0,
    info: [
      {
        id: 1,
        linePicture: {
          pX: 0,
          pY: 0,
          widthLine: 200,
        },
        textInfo: "textInfo",
      },
    ],
  },
  {
    id: 5,
    image: RoundaboutIMG,
    imagePrev: TroughIMG,
    margin: 0,
    info: [
      {
        id: 1,
        linePicture: {
          pX: 0,
          pY: 0,
          widthLine: 200,
        },
        textInfo: "textInfo",
      },
    ],
  },
];
