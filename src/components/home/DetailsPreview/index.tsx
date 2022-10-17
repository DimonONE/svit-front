import React, { SetStateAction, useMemo, useState, WheelEvent } from "react";
import styled from "styled-components";
import { CardDetailsPreview } from "./DetailsPreview";
import { detailsData } from "../../../data/detailsDate";
import { wheelTimeoutHook } from "../../../hooks/wheelTimeoutHook";
import { NextCartType } from "src/hooks/animationCartHook";
import WrapperCardDetails from "./WrapperCardDetails";

const Wrapper = styled.div`
  max-width: 1512px;
  min-width: 720px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const TextInfo = styled.h3`
  max-width: 840px;
  margin-left: 10%;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const DetailsPreview: React.FC = () => {
  return (
    <Wrapper>
      <TextInfo>
        Svit touch - це поєднання естетики і функціональності. Ми об'єднали
        дизайн і <br />
        технології, щоб зробити ваш будинок ще прекрасніше, управління -
        простіше, ваше <br /> життя - краще
      </TextInfo>
      <WrapperCardDetails data={detailsData} />
    </Wrapper>
  );
};

export default DetailsPreview;
