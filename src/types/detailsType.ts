export interface DetailInfo {
  id: number;
  widthLine: number;
  pY: number;
  textInfo: {
    title: string;
    text: string;
  };
}

export interface Detail {
  id: number;
  image: string;
  info: DetailInfo[];
  imagePrev?: string;
  detailBottom?: string;
}
