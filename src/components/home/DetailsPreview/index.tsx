import React, { SetStateAction, useMemo, useState, WheelEvent } from "react";
import styled from "styled-components";
import { CardDetailsPreview } from "./DetailsPreview";
import { detailsData } from "../../../data/detailsDate";
import { wheelTimeoutHook } from "../../../hooks/wheelTimeoutHook";
import { NextCartType } from "src/hooks/animationCartHook";

const Wrapper = styled.div`
  max-width: 1512px;
  min-width: 720px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const WrapperCardDetails = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const TextInfo = styled.h3`
  max-width: 840px;
  margin-left: 10%;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const DetailsPreview: React.FC = () => {
  const [showDetails, setShowDetails] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextCart, setNextCart] = useState<NextCartType>(0);

  const handleScroll = (event: WheelEvent<HTMLDivElement> | undefined) => {
    const { nevEvent } = wheelTimeoutHook({
      event,
      loading,
      setLoading,
      delay: 400,
    });

    if (nevEvent) {
      const count = (prevCount: number) => {
        const next = event?.deltaY && event.deltaY < 0;
        setNextCart(() => !!next ? 1 : -1);
        return !!next
          ? prevCount < detailsData.length
            ? ++prevCount
            : prevCount
          : prevCount > 1
          ? --prevCount
          : prevCount;
      };
      setShowDetails((prev) => count(prev));
    }
  };
  return (
    <Wrapper>
      <TextInfo>
        Svit touch - це поєднання естетики і функціональності. Ми об'єднали
        дизайн і <br />
        технології, щоб зробити ваш будинок ще прекрасніше, управління -
        простіше, ваше <br /> життя - краще
      </TextInfo>
      <WrapperCardDetails onWheel={handleScroll}>
        {detailsData.map((props, index, array) => (
          <CardDetailsPreview
            key={props.id}
            firstItem={index === 0}
            nextCart={nextCart}
            lastItem={index === array.length - 1}
            showDetails={showDetails}
            amountCards={array.length}
            {...props}
          />
        ))}
      </WrapperCardDetails>
    </Wrapper>
  );
};

export default DetailsPreview;
