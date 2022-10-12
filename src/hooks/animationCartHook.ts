export interface AnimationToLeftType {
    marginLeft: string;
    marginLeftNext: string;
  }
  
export type NextCartType = -1 | 1 | 0


export const animationCustom = (
    detailId: number,
    showDetails: number,
    nextCart?: -1 | 0 | 1
  ): string => {
  
  const animation = ({marginLeft, marginLeftNext}: AnimationToLeftType) => `
   transition: 1s;
   transform: translate(${marginLeftNext});
  `;

  if (detailId === 1) {
      if (showDetails === 1 && nextCart === -1)
        return ` ${animation({marginLeft: "250px", marginLeftNext: "0px"})} `
        
      if (showDetails === 2){
        if(nextCart === 1) {
            return `
                  ${animation({marginLeft: "0px", marginLeftNext: "250px"})}
                  `
        }
         return `
                  ${animation({marginLeft: "250px", marginLeftNext: "250px"})}
                `
      }

      if (showDetails >= 3)
        return nextCart === 1
          ? `
              ${animation({marginLeft: "250px", marginLeftNext: "calc(100% + 200px)"})}
              right: 400px;
            `
          :  `
             
              ${animation({marginLeft: "calc(100% - 250px)", marginLeftNext: "250px"})}
            ` ;
      return ' left: 0;'
    }
  
  if(showDetails > 2 && nextCart && showDetails === detailId + 1) {
    return  ` ${animation({marginLeft: "250px", marginLeftNext: "250px"})} `
  }

  
  if(showDetails >= 2 && !!nextCart ) {
    return  ` ${animation({marginLeft: "250px", marginLeftNext: "0px"})} `
  }

  return ''
};  