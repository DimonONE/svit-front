import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { CardDetailsPreview } from "./DetailsPreview";
import { detailsData } from "../../../data/detailsDate";
import debounce from "debounce"
const Wrapper = styled.div`
  height: 100%;
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


  
  const handleScroll = debounce(()=> {setShowDetails((prev) => details.length + 1 > prev ? prev + 1: 1); console.log('showDetails', showDetails);
  }, 100 )

  return (
    <Wrapper>
      <TextInfo>
        Svit touch - це поєднання естетики і функціональності. Ми об'єднали
        дизайн і <br />
        технології, щоб зробити ваш будинок ще прекрасніше, управління -
        простіше, ваше <br /> життя - краще
      </TextInfo>
      <WrapperCardDetails onWheel={handleScroll}>
        {details.map((props, index) => (
          <CardDetailsPreview
            key={props.id}
            firstIndex={index === 0}
            handleScroll={handleScroll}
            {...props}
          />
        ))}
      </WrapperCardDetails>
    </Wrapper>
  );
};

export default DetailsPreview;
