import React from "react";
import {Modal} from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import {connectorLocalStorageKey} from "./config";


const AccountModal = ({account, logout, onDismiss = () => null}) => (
    <Modal title="Your wallet" onDismiss={onDismiss}>
        <div
            fontSize="20px"
            style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px"}}
        >
            {account}
        </div>
        <div mb="32px">
            <a small href={`https://bscscan.com/address/${account}`} mr="16px">
                View on BscScan
            </a>
            <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
        </div>
        <div justifyContent="center">
            <button
                scale="sm"
                variant="secondary"
                onClick={() => {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                }}
            >
                Logout
            </button>
        </div>
    </Modal>
);

export default AccountModal;
