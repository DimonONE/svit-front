import React, { SetStateAction, useEffect, useState, WheelEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Detail, DetailInfo } from "../../../types/detailsType";
import {
  animationCustom,
  AnimationToLeftType,
  NextCartType,
} from "src/hooks/animationCartHook";
import { heightMd } from "../../../utils/media";

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
  heightCard: number;
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
    (props.showDetails < 4 && props.detailId === 3) ||
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
  heightCard: props.heightCard,
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
  height: ${(props) =>
    props.detailId === 1 || props.detailId === props.showDetails - 1
      ? props.heightCard
      : props.heightCard - 20}px;
  @media (max-height: ${heightMd}) {
    height: 455px;
    margin-top: -100px;
    margin-left: 2%;
  }
`;

const InfoContainer = styled.div.attrs(
  (props: { pY: number; heightMdpPY: number }) => ({
    pY: props.pY,
    heightMdpPY: props.heightMdpPY,
  })
)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => props.pY}px;

  width: 590px;
  flex: 1;
  align-items: flex-end;

  @media (max-height: ${heightMd}) {
    width: 555px;
    top: ${(props) => (props.heightMdpPY ? props.heightMdpPY : props.pY)}px;
  }
`;

const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 234px;
  width: 100%;
  margin-bottom: 25px;

  @media (max-height: ${heightMd}) {
    margin-bottom: 10px;
  }
`;

const TextInfo = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  @media (max-height: ${heightMd}) {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
`;

const TextInfoTitle = styled.span`
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;

  @media (max-height: ${heightMd}) {
    font-size: 18px;
    line-height: 16px;
    margin-bottom: 5px;
  }
`;

const InfoLine = styled.div.attrs(
  (props: { width: number; widthLineMd: number }) => ({
    width: `${props.width}px`,
    widthLineMd: `${props.widthLineMd}px`,
  })
)`
  width: ${(props) => props.width};
  opacity: 0.5;
  border-top: 1px solid #ffffff;

  @media (max-height: ${heightMd}) {
    width: ${(props) => (props.widthLineMd ? props.widthLineMd : props.width)};
  }
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
  height: 30px;
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
          detailId={props.id}
          showDetails={showDetails}
          heightCard={heightCard}
        >
          <Image
            src={image}
            style={{ marginLeft: props.id === 2 ? "3px" : "" }}
          />
          {props.detailBottom && (
            <DetailBottom
              src={props.detailBottom}
              showDetail={props.id + 1 === showDetails}
            />
          )}
        </CardContainer>
        {showDetails === props.id + 1 &&
          props.info.map((item) => (
            <InfoContainer
              key={item.id}
              pY={item.pY}
              heightMdpPY={item.heightMdpPY}
            >
              <TextInfoContainer>
                <TextInfoTitle>{item.textInfo.title}</TextInfoTitle>
                <TextInfo>{item.textInfo.text}</TextInfo>
              </TextInfoContainer>
              <InfoLine width={item.widthLine} widthLineMd={item.widthLineMd}>
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
