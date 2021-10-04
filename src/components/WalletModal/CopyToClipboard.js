import React, {useState} from "react";
import styled from "styled-components";
import {AiOutlineCopy} from "react-icons/ai";

const StyleButton = styled.div.attrs({role: "button"})`
  position: relative;
  display: flex;
  align-items: center;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  border-radius: 16px;
  opacity: 0.7;
`;

const CopyToClipboard = ({toCopy, children, ...props}) => {
    const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

    return (
        <StyleButton
            small
            onClick={() => {
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(toCopy);
                    setIsTooltipDisplayed(true);
                    setTimeout(() => {
                        setIsTooltipDisplayed(false);
                    }, 1000);
                }
            }}
            {...props}
        >
            {children}
            <AiOutlineCopy/>
            <Tooltip isTooltipDisplayed={isTooltipDisplayed}>Copied</Tooltip>
        </StyleButton>
    );
};

export default CopyToClipboard;
