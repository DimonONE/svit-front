import React, { useEffect, WheelEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Detail, DetailInfo } from "../../../types/detailsType";

interface IProps extends Detail {
  firstItem: boolean;
  lastItem: boolean;
  amountCards: number;
  showDetails: number;
}

const opacityAnimation = () => keyframes`
  0% { opacity: 0.1; left: 0;  
    transition: left 2000ms ease;
  }
 20% { opacity: 0.3;}
 40% { opacity: 0.5 } 
 60% { opacity: 0.7 }
 80% { opacity: 0.9 }
 100% { opacity: 1; left: 240px; transition-property: opacity, left; transition: left 2000ms ease; }`;

// position: ${(props) => (props.firstItem ? "static" : "absolute")};
// left: ${(props) =>
//   props.firstItem
//     ? 0
//     : props.lastItem && props.amountCards > 2
//     ? "auto"
//     : "240px"};
// right: ${(props) => (props.lastItem ? "0px" : "auto")};
// opacity: ${(props) =>
//     props.firstItem && props.amountCards > 2 ? "0.7" : "1"};

const CardWrapper = styled.div.attrs(
  (props: {
    firstItem: boolean;
    lastItem: boolean;
    detailId: number;
    showDetails: number;
  }) => ({
    detailId: props.detailId,
    showDetails: props.showDetails,
  })
)`
  overflow: visible;
  min-height: 50vh;
  perspective: 2000;
  display: -ms-flexbox;
  position: ${(props) =>
    (props.detailId === 1 && props.showDetails < 3) ||
    (props.detailId === props.showDetails - 1 && props.detailId !== 1)
      ? "static"
      : "absolute"};
  right: ${(props) =>
    props.detailId === 1 && props.showDetails >= 3 ? "0" : "auto"};

  margin-left: ${(props) =>
    props.detailId > 1 &&
    props.showDetails > props.detailId &&
    props.detailId >= props.showDetails - 1
      ? "150px;"
      : "0"};
  opacity: ${(props) =>
    props.detailId === 1 ||
    (props.showDetails > 1 &&
      props.detailId >= props.showDetails - 1 &&
      props.detailId <= props.showDetails + 1)
      ? "1"
      : "0"};

  display: ${(props) =>
    props.detailId === 1 ||
    (props.showDetails > 1 &&
      props.detailId >= props.showDetails - 1 &&
      props.detailId <= props.showDetails + 1)
      ? "block"
      : "none"};
  //animation: ${opacityAnimation} 2s linear infinite;
  //animation-iteration-count: 1;
`;

const CardContainer: any = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 450px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  color: #fff;
  cursor: grab;
  margin-left: 5%;
`;

const InfoContainer = styled.div.attrs((props: { pY: number }) => ({
  pY: props.pY,
}))`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => `${props.pY}px`};

  width: 590px;
  flex: 1;
  align-items: flex-end;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 234px;
  margin-bottom: 30px;
`;

const TextInfo = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const TextInfoTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const InfoLine: any = styled.div.attrs((props: { width: string }) => ({
  width: `${props.width}px`,
}))`
  width: ${(props) => props.width};
  opacity: 0.5;
  border: 1px solid #ffffff;
`;

export const CardDetailsPreview: React.FC<IProps> = (props) => {
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // const rotateX = useTransform(y, [-100, 100], [30, -30]);
  // const rotateY = useTransform(x, [-100, 0], [-30, 0]);
  const heightCard = 700;
  const { firstItem, lastItem, amountCards, showDetails } = props;
  console.log("props.id", props);
  console.log("showDetails", showDetails);
  return (
    <CardWrapper detailId={props.id} showDetails={showDetails}>
      <CardContainer
      // style={{ x: 0, y, rotateX, rotateY, z: 100, height: heightCard }}
      // drag
      // dragElastic={0.16}
      // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      // whileTap={{ cursor: "grabbing" }}
      >
        <img
          height={firstItem ? heightCard - 50 : heightCard}
          src={props.image}
        />
        <ShoesWrapper />
      </CardContainer>
      {!firstItem &&
        !lastItem &&
        props.info.map((item) => (
          <InfoContainer key={item.id} pY={item.pY}>
            <TextInfoContainer>
              <TextInfoTitle>{item.textInfo.title}</TextInfoTitle>
              <TextInfo>{item.textInfo.text}</TextInfo>
            </TextInfoContainer>
            <InfoLine width={item.widthLine} />
          </InfoContainer>
        ))}
    </CardWrapper>
  );
};
