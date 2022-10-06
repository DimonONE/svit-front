import React from "react";
import styled, {StyledProps} from "styled-components";

interface Margin  {
    margin: string | number
}

interface MarginerProps extends Margin{
    direction: 'horizontal' | 'vertical'
}


const HorizontalMargin = styled.span<StyledProps<any>>`
  display: flex;
  width: ${({ margin }: Margin) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<StyledProps<any>>`
  display: flex;
  height: ${({ margin }: Margin) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const Marginer:React.FC<MarginerProps> = (props) => {
    const { direction } = props;

    if (direction === "horizontal") return <HorizontalMargin {...props} />;
    else {
        return <VerticalMargin {...props} />;
    }
}

Marginer.defaultProps = {
    direction: "horizontal",
};

export { Marginer };