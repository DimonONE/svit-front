export interface DetailInfo {
  id: number;
  widthLine: number;
  pY: number;
  textInfo: {
    title: string;
    text: string;
  };
  infoLineBottom?: boolean;
}

export interface Detail {
  id: number;
  image: string;
  info: DetailInfo[];
  imagePrev?: string;
  detailBottom?: string;
}
