import React from "react";
import {connectorLocalStorageKey} from "./config";
import styled from "styled-components";

const WalletCard = ({login, walletConfig, onDismiss, mb}) => {
    const {title, icon: Icon} = walletConfig;
    return (
        <BtnWallet
            onClick={() => {
                login(walletConfig.connectorId);
                window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
                onDismiss();
            }}
            style={{justifyContent: "space-between"}}
            mb={mb}
            id={`wallet-connect-${title.toLocaleLowerCase()}`}
        >
            <Icon width="40px"/>
            <Title>
                {title}
            </Title>
        </BtnWallet>
    );
};
const Title = styled.div`
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
`
const BtnWallet = styled.button.attrs({
    type: 'button'
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  border: 0px;
  border-radius: 16px;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  padding: 16px 24px;
  background-color: transparent;
  color: rgb(31, 199, 212);
  box-shadow: none;
  width: 100%;
  
  &:hover {
    background: linear-gradient(to bottom right,white 0%,#e6e4ff 70%);
    color: black;
  }
  svg{
    align-self: center;
    fill: rgb(244, 238, 255);
    flex-shrink: 0;
    margin-bottom: 8px;
  }
`;

export default WalletCard;
