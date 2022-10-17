import GlassFullImg from "../assets/images/sockets/glass-full.png";
import GlassImg from "../assets/images/sockets/glass.png";
import BoardImg from "../assets/images/sockets/board.png";
import FameTroughImg from "../assets/images/sockets/frame-trough.png";
import RamkaIMG from "../assets/images/sockets/ramka.png";
import TroughIMG from "../assets/images/sockets/trough.png";
import TroughRoundaboutIMG from "../assets/images/sockets/trough-roundabout.png";
import RoundaboutIMG from "../assets/images/sockets/roundabout.png";
import DetailBoardIMG from "../assets/images/sockets/datchika.png";
import { Detail } from "../types/detailsType";

export const detailsData: Detail[] = [
  {
    id: 1,
    image: GlassFullImg,
    imagePrev: GlassImg,
    info: [
      {
        id: 1,
        widthLine: 370,
        pY: 105,
        textInfo: {
          title: "Загартоване матове скло",
          text: "Скло з приємною матовою поверхнею, олеофобним покриттям, яке захищає скло від відбитків пальців",
        },
      },
      {
        id: 2,
        widthLine: 370,
        pY: 315,
        textInfo: {
          title: "Інтуїтивна навігація",
          text: "Фрезероване скло дозволяє швидко і просто скористатися панеллю завдяки тактильним відчуттям",
        },
      },
    ],
  },
  {
    id: 2,
    image: BoardImg,
    detailBottom: DetailBoardIMG,
    info: [
      {
        id: 1,
        widthLine: 370,
        pY: 65,
        textInfo: {
          title: "Можливість взаємодії з кожним міліметром панелі",
          text: "Забезпечується чуттєвим сенсором уздовж усієї поверхні ",
        },
      },
      {
        id: 2,
        widthLine: 410,
        pY: 270,
        textInfo: {
          title: "Індивідуальна підсвітка",
          text: "При натиску на будь-яку іконку",
        },
      },
      {
        id: 3,
        widthLine: 398,
        pY: 350,
        textInfo: {
          title: "Особливі візуальні ефекти",
          text: "Реалізовані за допомогою масиву світлодіодів",
        },
      },
      {
        id: 4,
        widthLine: 440,
        pY: 450,
        textInfo: {
          title: "Контроль безлічі показників",
          text: "Шляхом вбудованих датчиків освітлення, температури, вологості та тиску",
        },
      },
    ],
  },
  {
    id: 3,
    image: FameTroughImg,
    imagePrev: RamkaIMG,
    info: [
      {
        id: 1,
        widthLine: 435,
        pY: -15,
        textInfo: {
          title: "М’який натиск",
          text: "Завдяки пружинній рамці",
        },
      },
      {
        id: 2,
        widthLine: 435,
        pY: 205,
        textInfo: {
          title: "Тaptic Engine",
          text: "Забезпечує приємні тактильні відчуття ",
        },
      },
      {
        id: 3,
        widthLine: 388,
        pY: 390,
        textInfo: {
          title: "Чутливі тензодатчики",
          text: "зчитують силу натиску, забезпечуючи багатофункціональність приладу",
        },
      },
    ],
  },
  {
    id: 4,
    image: TroughRoundaboutIMG,
    imagePrev: RoundaboutIMG,
    info: [
      {
        id: 1,
        widthLine: 430,
        pY: 200,
        textInfo: {
          title: "Інтерфейс KNX",
          text: "Забезпечує сумістність з будь-якою системою розумного будинку",
        },
      },
    ],
  },
  {
    id: 5,
    image: TroughIMG,
    info: [
      {
        id: 1,
        widthLine: 400,
        pY: 470,
        textInfo: {
          title: "Швидкий і універсальний монтаж",
          text: "За допомогою отворів на зворотній поверхні вимикача",
        },
      },
      {
        id: 2,
        widthLine: 348,
        pY: 200,
        textInfo: {
          title: "Анодований алюміній",
          text: "7000-ї серії",
        },
      },
      {
        id: 3,
        widthLine: 380,
        pY: 53,
        textInfo: {
          title: "Просте встановлення",
          text: "Лише два ґвинти",
        },
      },
    ],
  },
  {
    id: 6,
    image: "",
    info: [],
  },
];
