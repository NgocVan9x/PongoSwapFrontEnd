import React from "react";
import styled from "styled-components";
import {AiOutlineClose} from "react-icons/ai";

const StyledModal = styled.div`
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0px 20px 36px -8px rgb(14 14 44 / 10%), 0px 1px 1px rgb(0 0 0 / 5%);
  border: 1px solid #E7E3EB;
  border-radius: 32px;
  width: 100%;
  max-height: 100vh;
  z-index: 100;

  overflow-y: auto;
  @media screen and (min-width: 370px) {
    width: auto;
    min-width: 320px;
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9eaeb;
  padding: 12px 24px;

  background: linear-gradient(
          139.73deg,#E5FDFF 0%,#F3EFFF 100%);
  border-bottom: 1px solid #E7E3EB;
  h4 {
      margin: 0;
      padding: 0;
  }
  button{
    padding: 0;
    width: 48px;
    height: 48px;
    color: #1FC7D4;
    svg{
      align-self: center;
      fill: rgb(31, 199, 212);
      flex-shrink: 0;
    }
  }
`;

const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  /* Heading 4 */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  /* identical to box height, or 119% */

  letter-spacing: 0.015em;

  color: #280D5F;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  width: 320px;
  @media screen and (min-width: 576px) {
    width: 340px;
  }
`;

const Modal = ({
                   title,
                   onDismiss,
                   onBack,
                   children,
                   hideCloseButton = false,
                   bodyPadding = "24px",
               }) => (
    <StyledModal>
        <ModalHeader>
            <ModalTitle>
                <h4>{title}</h4>
            </ModalTitle>
            {!hideCloseButton && (
                <button variant="text" onClick={onDismiss} aria-label="Close the dialog">
                    <AiOutlineClose/>
                </button>
            )}
        </ModalHeader>
        <ModalContent>
            {children}
        </ModalContent>
    </StyledModal>
);

export default Modal;
