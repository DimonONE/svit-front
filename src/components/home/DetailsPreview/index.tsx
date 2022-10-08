import React, { useMemo, useState, WheelEvent } from "react";
import styled from "styled-components";
import { CardDetailsPreview } from "./DetailsPreview";
import { detailsData } from "../../../data/detailsDate";
import debounce from "debounce";
const Wrapper = styled.div`
  max-width: 1512px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const WrapperCardDetails = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  overflow-x: auto;
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

  const details = useMemo(() => {
    return detailsData
      .filter(({ id }) => showDetails >= id && id + 2 >= showDetails)
      .reverse();
  }, [showDetails]);

  const handleScroll = (event: WheelEvent<HTMLDivElement> | undefined) => {
    debounce(() => {
      const count = (prevCount: number) => {
        return event?.deltaY
          ? prevCount >= detailsData.length
            ? 1
            : ++prevCount
          : prevCount <= detailsData.length
          ? 1
          : --prevCount;
      };

      setShowDetails((prev) => count(prev));
    }, 150)();
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
        {details.map((props, index, array) => (
          <CardDetailsPreview
            key={props.id}
            firstItem={index === 0}
            lastItem={index === array.length - 1}
            amountCards={array.length}
            handleScroll={handleScroll}
            {...props}
          />
        ))}
      </WrapperCardDetails>
    </Wrapper>
  );
};

export default DetailsPreview;
