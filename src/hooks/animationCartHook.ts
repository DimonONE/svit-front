export interface AnimationToLeftType {
  marginLeftNext: string;
}

export type NextCartType = -1 | 1 | 0;

export const animationCustom = (
  detailId: number,
  showDetails: number,
  nextCart?: -1 | 0 | 1
): string => {
  const animation = ({ marginLeftNext }: AnimationToLeftType) => `
     transition: left 1.2s, visibility 1s;
     left: ${marginLeftNext};
  `;
  // transform: translate(${marginLeftNext});

  if (detailId === 1) {
    if (showDetails === 1 && nextCart === -1)
      return ` ${animation({ marginLeftNext: "0px" })} `;

    if (showDetails === 2) {
      if (nextCart === 1) {
        return `${animation({ marginLeftNext: "250px" })}`;
      }
      return `${animation({ marginLeftNext: "250px" })}`;
    }

    if (showDetails >= 3) {
      if (nextCart) {
        return `
                  ${animation({
                    marginLeftNext: "83%",
                  })}
                `;
      }
      return `${animation({
        marginLeftNext: "250px",
      })} `;
    }
    return " left: 0px;";
  }

  if (nextCart && showDetails === detailId + 1) {
    return ` ${animation({ marginLeftNext: "250px" })} `;
  }

  if (showDetails === 1 && detailId === 2 && nextCart === -1) {
    return ` ${animation({ marginLeftNext: "20px" })} `;
  }

  if (showDetails >= 2 && nextCart === -1) {
    return ` ${animation({ marginLeftNext: "20px" })} `;
  }

  return "";
};
