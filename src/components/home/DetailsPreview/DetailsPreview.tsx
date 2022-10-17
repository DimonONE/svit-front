import React, { useEffect, WheelEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Detail, DetailInfo } from "../../../types/detailsType";
import {
  animationCustom,
  AnimationToLeftType,
  NextCartType,
} from "src/hooks/animationCartHook";

interface IProps extends Detail {
  showDetails: number;
  nextCart: NextCartType;
  cardsLength: number;
}

interface IPropsCard
  extends Pick<IProps, "showDetails" | "nextCart" | "cardsLength"> {
  detailId: number;
}

const Card = styled.div.attrs((props: IPropsCard) => ({
  detailId: props.detailId,
  showDetails: props.showDetails,
  nextCart: props.nextCart,
  cardsLength: props.cardsLength,
}))`
  z-index: ${(props) => 7 - props.detailId};
  position: absolute;
  left: ${(props) => (props.detailId !== 1 ? "20px" : "0")};
  ${(props) =>
    animationCustom(props.detailId, props.showDetails, props.nextCart)}
  visibility: ${(props) =>
    props.detailId === 1 ||
    props.cardsLength === props.detailId ||
    props.detailId === props.showDetails ||
    (props.detailId + 2 > props.showDetails &&
      props.detailId - 2 < props.showDetails)
      ? "visible"
      : "hidden"};
`;

const CardContainer: any = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 600px;
  color: #fff;
  margin-left: 5%;
  transition: height 1.2s;
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
  max-width: 234px;
  width: 100%;
  margin-bottom: 30px;
`;

const TextInfo = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
`;

const TextInfoTitle = styled.span`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
`;

const InfoLine: any = styled.div.attrs((props: { width: string }) => ({
  width: `${props.width}px`,
}))`
  width: ${(props) => props.width};
  opacity: 0.5;
  border-top: 1px solid #ffffff;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CardDetailsPreview: React.FC<IProps> = (props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 0], [-30, 0]);
  const heightCard = 600;
  const { nextCart, showDetails, cardsLength } = props;

  return (
    <CardWrapper>
      <Card
        detailId={props.id}
        showDetails={showDetails}
        nextCart={nextCart}
        cardsLength={cardsLength}
      >
        <CardContainer
          style={{
            x: 0,
            y,
            rotateX,
            rotateY,
            z: 100,
            height:
              props.id === 1 || props.id === showDetails - 1
                ? heightCard
                : heightCard - 50,
          }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <img
            height="100%"
            src={
              props.imagePrev && props.id !== showDetails
                ? props.imagePrev
                : props.image
            }
          />
          <ShoesWrapper />
        </CardContainer>
        {showDetails === props.id + 1 &&
          props.info.map((item) => (
            <InfoContainer key={item.id} pY={item.pY}>
              <TextInfoContainer>
                <TextInfoTitle>{item.textInfo.title}</TextInfoTitle>
                <TextInfo>{item.textInfo.text}</TextInfo>
              </TextInfoContainer>
              <InfoLine width={item.widthLine} />
            </InfoContainer>
          ))}
      </Card>
    </CardWrapper>
  );
};
