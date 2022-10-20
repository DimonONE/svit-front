import { CardDetailsPreview } from "./DetailsPreview";
import React, { useMemo, useState, WheelEvent } from "react";
import styled from "styled-components";
import { wheelTimeoutHook } from "../../../hooks/wheelTimeoutHook";
import { NextCartType } from "../../../hooks/animationCartHook";
import { Detail } from "../../../types/detailsType";

interface IProps {
  data: Detail[];
}

const CardDetails = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 90vh;
  align-items: center;
`;

const WrapperCardDetails: React.FC<IProps> = ({ data: detailsData }) => {
  const [showDetails, setShowDetails] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextCart, setNextCart] = useState<NextCartType>(0);

  const handleScroll = (event: WheelEvent<HTMLDivElement> | undefined) => {
    const { nevEvent } = wheelTimeoutHook({
      event,
      loading,
      setLoading,
      delay: 500,
    });

    if (nevEvent) {
      const count = (prevCount: number) => {
        const next = event?.deltaY && event.deltaY < 0;
        setNextCart(() => (!!next ? 1 : -1));
        return !!next
          ? prevCount > 1
            ? --prevCount
            : prevCount
          : prevCount < detailsData.length
          ? ++prevCount
          : prevCount;
      };
      setShowDetails((prev) => count(prev));
    }
  };
  return (
    <CardDetails onWheel={handleScroll}>
      {detailsData.map((props) => (
        <CardDetailsPreview
          key={props.id}
          cardsLength={detailsData.length}
          nextCart={nextCart}
          showDetails={showDetails}
          delayAnimations={900}
          {...props}
        />
      ))}
    </CardDetails>
  );
};

export default WrapperCardDetails;
