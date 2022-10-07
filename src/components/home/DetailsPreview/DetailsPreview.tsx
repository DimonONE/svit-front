import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { Detail, DetailInfo } from "../../../types/detailsType";

interface IProps extends Detail {
  firstIndex: boolean;
  handleScroll: () => void;
}

const opacityAnimation = () => keyframes`
  0% { opacity: 0.1; left: 0;  
    transition: left 500ms ease;
  }
 20% { opacity: 0.3;}
 40% { opacity: 0.5 } 
 60% { opacity: 0.7 }
 80% { opacity: 0.9 }
 100% { opacity: 1; left: 240px; transition-property: opacity, left; }`;

const CardWrapper = styled.div.attrs((props: { firstIndex: boolean }) => ({
  firstIndex: props.firstIndex,
}))`
  position: ${(props) => (props.firstIndex ? "static" : "absolute")};
  left: ${(props) => (props.firstIndex ? 0 : "240px")};
  min-height: 50vh;
  perspective: 2000;
  display: -ms-flexbox;
  opacity: 1;
`;

// animation: ${opacityAnimation} 2s linear infinite;
//   animation-iteration-count: 1;
// animation: ease-in 3s infinite running ${};

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

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoLine: any = styled.div.attrs((props: { width: string }) => ({
  width: `${props.width}px`,
}))`
  width: ${(props) => props.width};
  opacity: 0.5;
  border: 1px solid #ffffff;
`;

export const CardDetailsPreview: React.FC<IProps> = (props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 0], [-30, 0]);
  const heightCard = 700;
  const { firstIndex, handleScroll } = props;

  return (
    <CardWrapper firstIndex={firstIndex} onClick={handleScroll}>
      <CardContainer
        style={{ x: 0, y, rotateX, rotateY, z: 100, height: heightCard }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <img
          height={firstIndex ? heightCard - 50 : heightCard}
          src={firstIndex && props?.imagePrev ? props.imagePrev: props.image}
        />
        <ShoesWrapper />
        {!firstIndex &&
          props.info.map((item) => (
            <InfoContainer key={item.id}>
              <InfoLine width={item.linePicture.widthLine} />
              {item.textInfo}
            </InfoContainer>
          ))}
      </CardContainer>
    </CardWrapper>
  );
};
