import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

// @ts-ignore
import GlassImg from "../../../assets/images/glass.png";

const CardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  perspective: 2000;
  display: -ms-flexbox;
`;

const CardContainer: any = styled(motion.div)`
  width: 450px;
  height: 100%;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  color: #fff;
  position: relative;
  cursor: grab;
  margin-left: 5%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDetailsPreview: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 0], [-30, 0]);
  const heightCard = 700;

  return (
    <CardWrapper>
      <CardContainer
        style={{ x: 0, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <img height={heightCard} src={GlassImg} />
          <ShoesWrapper />
        </TopContainer>
      </CardContainer>
    </CardWrapper>
  );
};
