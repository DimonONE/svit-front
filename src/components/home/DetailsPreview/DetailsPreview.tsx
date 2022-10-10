import React, { useEffect, WheelEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Detail, DetailInfo } from "../../../types/detailsType";

interface IProps extends Detail {
  firstItem: boolean;
  lastItem: boolean;
  amountCards: number;
  showDetails: number;
  nextCart: boolean;
}

interface AnimationToLeftType {
  marginLeft: string;
  marginLeftPrev: string;
}

const opacityAnimation = ({
  marginLeft,
  marginLeftPrev,
}: AnimationToLeftType) => keyframes`
 0% { opacity: 0; left: ${marginLeft}; }
 100% { opacity: 1; left: ${marginLeftPrev}; }`;

const CardWrapper = styled.div.attrs(
  (props: { nextCart: boolean; detailId: number; showDetails: number }) => ({
    detailId: props.detailId,
    showDetails: props.showDetails,
    nextCart: props.nextCart,
  })
)`
  min-height: 50vh;
  perspective: 2000;
  display: -ms-flexbox;
  position: ${(props) =>
    (props.detailId === 1 && props.showDetails < 2) ||
    (props.detailId === 2 && props.showDetails === 2) ||
    (props.detailId > 2 && props.showDetails > 2)
      ? "relative"
      : "absolute"};
  right: ${(props) =>
    props.detailId === 1 && props.showDetails >= 3 ? "0" : "auto"};

  left: ${(props) =>
    props.detailId === 1 && props.showDetails >= 2
      ? animationToLeft(props.detailId, props.showDetails)[
          props.nextCart ? "marginLeft" : "marginLeft"
        ]
      : animationToLeft(props.detailId, props.showDetails)[
          props.nextCart ? "marginLeftPrev" : "marginLeft"
        ]};
  opacity: ${(props) =>
    props.detailId === 1 || props.detailId <= props.showDetails ? "1" : "0"};

  visibility: ${(props) =>
    props.detailId <= props.showDetails ? "visible" : "hidden"};
  animation: ${(props) =>
      opacityAnimation(
        animationToLeft(props.detailId, props.showDetails, props.nextCart)
      )}
    0.4s linear infinite;
  animation-iteration-count: 1;
`;

const animationToLeft = (
  detailId: number,
  showDetails: number,
  nextCart?: boolean
): AnimationToLeftType => {
  if (detailId != 1 && showDetails === detailId + 1)
    return { marginLeft: "0px", marginLeftPrev: "250px" };

  if (detailId === 1) {
    if (showDetails === 2)
      return nextCart
        ? { marginLeft: "0px", marginLeftPrev: "250px" }
        : { marginLeft: "250px", marginLeftPrev: "calc(100% - 250px)" };

    if (showDetails > 3)
      return nextCart
        ? {
            marginLeft: "250px",
            marginLeftPrev: "calc(100% - 250px)",
          }
        : {
            marginLeft: "calc(100% - 250px)",
            marginLeftPrev: "250px",
          };

    if (showDetails > 2)
      return nextCart
        ? { marginLeft: "250px", marginLeftPrev: "calc(100% - 250px)" }
        : { marginLeft: "calc(100% - 250px)", marginLeftPrev: "250px" };
  }

  return { marginLeft: "0px", marginLeftPrev: "0px" };
};

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
  const { firstItem, lastItem, nextCart, showDetails } = props;

  return (
    <CardWrapper
      detailId={props.id}
      showDetails={showDetails}
      nextCart={nextCart}
    >
      <CardContainer
      // style={{ x: 0, y, rotateX, rotateY, z: 100, height: heightCard }}
      // drag
      // dragElastic={0.16}
      // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      // whileTap={{ cursor: "grabbing" }}
      >
        <img
          height={
            props.id === 1 || props.id === showDetails - 1
              ? heightCard
              : heightCard - 50
          }
          src={props.image}
        />
        <ShoesWrapper />
      </CardContainer>
      {
        // !firstItem &&
        // !lastItem &&
        showDetails === props.id + 1 &&
          props.info.map((item) => (
            <InfoContainer key={item.id} pY={item.pY}>
              <TextInfoContainer>
                <TextInfoTitle>{item.textInfo.title}</TextInfoTitle>
                <TextInfo>{item.textInfo.text}</TextInfo>
              </TextInfoContainer>
              <InfoLine width={item.widthLine} />
            </InfoContainer>
          ))
      }
    </CardWrapper>
  );
};
