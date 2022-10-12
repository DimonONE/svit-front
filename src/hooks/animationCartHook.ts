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
  
  const animation = ({visibility, marginLeft, marginLeftNext}: AnimationToLeftType | any) => `
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

      if (showDetails >= 3) {
        if(nextCart) {
          return  `
                  ${animation({marginLeft: "250px", marginLeftNext: "calc(100% + 400px)"})}
                `
        }
        return `${animation({marginLeft: "calc(100% - 250px)", marginLeftNext: "250px"})} `
      }
      
      return ' left: 0;'
    }
  
  if( nextCart && showDetails === detailId + 1) {
    return  ` ${animation({marginLeft: "250px", marginLeftNext: "250px"})} `
  }

  if(showDetails === 1 && detailId === 2 && nextCart === -1 ) {
    return  ` ${animation({marginLeft: "250px", marginLeftNext: "0px"})} `
  }
  
  if(showDetails >= 2 && nextCart === -1 ) {
    return  ` ${animation({marginLeft: "250px", marginLeftNext: "0px"})} `
  }

  return ''
};  