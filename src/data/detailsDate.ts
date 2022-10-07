import GlassImg from "../assets/images/sockets/glass.png";
import BoardImg from "../assets/images/sockets/board.png";
import FameTroughImg from "../assets/images/sockets/frame-trough.png";
import FrameIMG from "../assets/images/sockets/frame.png";
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
    image: FameTroughImg,
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
    image: FrameIMG,
    imagePrev: FameTroughImg ,
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
