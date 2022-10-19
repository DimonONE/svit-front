export interface AnimationToLeftType {
  marginLeftNext: string;
}

export type NextCartType = -1 | 1 | 0;

export const animationCustom = (
  detailId: number,
  showDetails: number,
  nextCart: -1 | 0 | 1
): string => {
  const animation = ({ marginLeftNext }: AnimationToLeftType) => `
     transition: transform 1.5s, visibility 0.9s, opacity 0.9s, height 2s;
     transform: translate(${marginLeftNext});
  `;

  if (detailId === 1) {
    if (showDetails === 1 && nextCart === 1)
      return `${animation({ marginLeftNext: "0px" })} `;

    if (showDetails === 2) return `${animation({ marginLeftNext: "250px" })}`;

    if (showDetails >= 3) {
      if (nextCart) {
        return `${animation({ marginLeftNext: "100vw" })}  opacity: 0;`;
      }
      return `${animation({
        marginLeftNext: "0px",
      })} `;
    }
    return " transform: translate(0px);";
  }

  if (detailId >= 2 && showDetails > 3 && showDetails === detailId + 2) {
    return `${animation({ marginLeftNext: "100vw" })}  opacity: 0;`;
  }

  if (!!nextCart && showDetails === detailId + 1) {
    return ` ${animation({ marginLeftNext: "250px" })} `;
  }

  if (showDetails === 1 && detailId === 2 && nextCart === 1) {
    return ` ${animation({ marginLeftNext: "0px" })}`;
  }

  if (showDetails >= 2 && nextCart === 1) {
    return ` ${animation({ marginLeftNext: "0px" })} `;
  }

  return "";
};
