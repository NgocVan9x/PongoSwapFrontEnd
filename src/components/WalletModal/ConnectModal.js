import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import {Modal} from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import {AiOutlineQuestionCircle} from "react-icons/ai";

const ConnectModalWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  max-height: 480px;
  overflow-y: auto;
  padding-top: 24px;
  padding-bottom: 24px;
`;
const ConnectModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-size: 100%;
  vertical-align: baseline;
`;

const ConnectModal = ({login, onDismiss = () => null}) => {
    return (
    <Modal title="Connect to a wallet" onDismiss={onDismiss}>
        <ConnectModalWrapper>
            <ConnectModalContent>
        {config.map((entry, index) => (
            <WalletCard
                key={entry.title}
                login={login}
                walletConfig={entry}
                onDismiss={onDismiss}
                mb={index < config.length - 1 ? "8px" : "0"}
            />
        ))}
            </ConnectModalContent>
        </ConnectModalWrapper>
    </Modal>
)};

export default ConnectModal;
