import React, { SetStateAction, useEffect, useState, WheelEvent } from "react";
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
  delayAnimations: number;
  disabledScroll: React.Dispatch<SetStateAction<boolean>>;
}

interface IPropsCard
  extends Pick<IProps, "showDetails" | "nextCart" | "cardsLength"> {
  detailId: number;
}

const opacityAnimation = keyframes`
 0% {transform: translate(0px, 0);}
 50% {transform: translate( 1px, 5px);}
 100% { transform: translate(0, 0px); }`;

const shadowAnimation = keyframes`
 0% {width: 240px ;}
 100% { width: 245px; }`;

const Card = styled.div.attrs((props: IPropsCard) => ({
  detailId: props.detailId,
  showDetails: props.showDetails,
  nextCart: props.nextCart,
  cardsLength: props.cardsLength,
}))`
  display: flex;
  align-items: center;
  z-index: ${(props) => props.cardsLength - props.detailId};
  position: absolute;
  ${(props) =>
    animationCustom(props.detailId, props.showDetails, props.nextCart)}
  visibility: ${(props) =>
    props.detailId === 1 ||
    props.cardsLength - 1 === props.detailId ||
    props.detailId === props.showDetails ||
    (props.detailId + 2 > props.showDetails &&
      props.detailId - 2 < props.showDetails)
      ? "visible"
      : "hidden"};
`;

const CardContainer: any = styled.div.attrs((props: IPropsCard) => ({
  detailId: props.detailId,
  showDetails: props.showDetails,
}))`
  position: relative;
  display: flex;
  align-items: center;
  width: 600px;
  color: #fff;
  margin-left: 5%;
  animation: ${(props) =>
      props.detailId + 1 === props.showDetails ? opacityAnimation : null}
    7s linear infinite;
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

const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 234px;
  width: 100%;
  margin-bottom: 25px;
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

const InfoLine = styled.div.attrs((props: { width: string }) => ({
  width: `${props.width}px`,
}))`
  width: ${(props) => props.width};
  opacity: 0.5;
  border-top: 1px solid #ffffff;
`;

const InfoLineBottom = styled(InfoLine)`
  margin-right: 320px;
  width: 170px;
  height: 20px;
  border-top: 0;
  border-bottom: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
`;

const Bolt = styled.img`
  position: absolute;
  margin-top: 5px;
  background: red;
  width: 30px;
  height: 30px;
  margin-left: -30px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
`;

const DetailBottom = styled.img.attrs((props: { showDetail: boolean }) => ({
  showDetail: props.showDetail,
}))`
  transition: bottom 1.2s;
  position: absolute;
  bottom: ${(props) => (props.showDetail ? "0" : "-10%")};
  visibility: ${(props) => (props.showDetail ? "visible" : "hidden")};
  height: 100%;
`;

export const CardDetailsPreview: React.FC<IProps> = ({
  disabledScroll,
  delayAnimations,
  ...props
}) => {
  const [image, setImage] = useState("");

  const { nextCart, showDetails, cardsLength } = props;
  const heightCard = 600;

  const timeout = () => {
    disabledScroll(() => true);
    setTimeout(() => {
      setImage(props.image);
      disabledScroll(() => false);
    }, delayAnimations);
  };

  useEffect(() => {
    if (nextCart === 1 && props.id === showDetails) {
      timeout();
      return;
    }

    if (nextCart === -1 && props.id + 1 === showDetails) {
      setImage(props?.imagePrev ? props.imagePrev : props.image);
    }

    if (nextCart === 0) setImage(props.image);
  }, [showDetails]);

  return (
    <CardWrapper>
      <Card
        detailId={props.id}
        showDetails={showDetails}
        nextCart={nextCart}
        cardsLength={cardsLength}
        style={{ height: heightCard + 100 }}
      >
        <CardContainer
          style={{
            height:
              props.id === 1 || props.id === showDetails - 1
                ? heightCard
                : heightCard - 20,
          }}
          detailId={props.id}
          showDetails={showDetails}
        >
          <Image src={image} />
          {props.detailBottom && (
            <DetailBottom
              src={props.detailBottom}
              showDetail={props.id + 1 === showDetails}
            />
          )}
        </CardContainer>
        {showDetails === props.id + 1 &&
          props.info.map((item) => (
            <InfoContainer key={item.id} pY={item.pY}>
              <TextInfoContainer>
                <TextInfoTitle>{item.textInfo.title}</TextInfoTitle>
                <TextInfo>{item.textInfo.text}</TextInfo>
              </TextInfoContainer>
              <InfoLine width={item.widthLine.toString()}>
                {item?.detailBolt && (
                  <Bolt src={item.detailBolt} style={{ marginTop: "-15px" }} />
                )}
              </InfoLine>
              {item?.infoLineBottom && (
                <InfoLineBottom>
                  {item?.detailBolt && <Bolt src={item.detailBolt} />}
                </InfoLineBottom>
              )}
            </InfoContainer>
          ))}
      </Card>
    </CardWrapper>
  );
};
