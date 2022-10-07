export interface DetailInfo {
  id: number;
  linePicture: {
    pX: number;
    pY: number;
    widthLine: number;
  };
  textInfo: string;
}

export interface Detail {
  id: number;
  image: string;
  margin: string | number;
  info: DetailInfo[];
  imagePrev?: string;
}
