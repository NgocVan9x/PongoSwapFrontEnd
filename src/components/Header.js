import React from "react";
import styled from "styled-components";
import Link from 'next/link';
import useAuth from "../lib/useAuth";
import {useWalletModal} from "./WalletModal";
import {useWeb3React} from "@web3-react/core";
import {Logo} from "../assets/logo";

const Header = () => {
    const {account} = useWeb3React()
    const {login, logout} = useAuth()
    const {onPresentConnectModal, onPresentAccountModal} = useWalletModal(login, logout, account);

    const renderRightMenus = () => {
        const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
        return (
            <RightWrapper>
                {!account && <BtnAuth onClick={onPresentConnectModal}>Connect Wallet</BtnAuth>}
                {account && <BtnAccount onClick={onPresentAccountModal}><p>{accountEllipsis}</p></BtnAccount>}
            </RightWrapper>
        );
    };
    return (
        <Wrapper
            id="header-revised"
        >
            <LeftWrapper>
                <Link href="/" as="/" prefetch={false}>
                    <a className="logo">
                        <Logo/>
                    </a>
                </Link>
            </LeftWrapper>
            <CenterWrapper>
                <Link href={'/swap'} as={'/swap'}>
                    <ItemLink>
                        Swap
                    </ItemLink>
                </Link>

                <Link href={'/farm'} as={'/farm'}>
                    <ItemLink>
                        Farm
                    </ItemLink>
                </Link>
                <Link href={'/transfer'} as={'/transfer'}>
                    <ItemLink>
                        Transfer
                    </ItemLink>
                </Link>
                <Link href={'/info'} as={'/info'}>
                    <ItemLink>
                        Info
                    </ItemLink>
                </Link>
                <Link href={'/analysis'} as={'/analysis'}>
                    <ItemLink>
                        Analysis
                    </ItemLink>
                </Link>
                <Link href={'/liquidity'} as={'/liquidity'}>
                    <ItemLink>
                        Liquidity Pool
                    </ItemLink>
                </Link>
            </CenterWrapper>
            {renderRightMenus()}
        </Wrapper>
    );
}
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  height: var(--header-height);
  z-index: var(--z-header-revised);
  background: #0B0B0B;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 30%;
  padding-right: 24px;

  .logo {
    display: block;
    overflow: hidden;
    width: 169px;
  }

  @media (min-width: 1100px) {
    .logo {
      display: initial;
      width: auto;
    }
  }
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 30%;
`
const ItemLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  padding: 30px 15.5px;
  //margin-right: 30px;
  letter-spacing: 0.015em;
  /* 04 */
  color: #FFFFFF;

  white-space: nowrap;

  :last-child {
    margin-right: 0;
  }

  :hover {
    text-decoration: none;
    color: #F89E55;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.75px;
      background: linear-gradient(270deg, rgba(255, 209, 76, 0.8) -9.33%, rgba(215, 20, 219, 0.8) 49.9%, #361499 106.72%);
    }
  }

  /* Inside Auto Layout */
  order: 0;
  cursor: pointer;
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 1 1 30%;
  justify-content: flex-end;
  align-items: center;
  padding-left: 24px;
`;

const BtnAuth = styled.button.attrs({
    type: 'button'
})`
  padding: 10px 21px;
  font-family: var(--ff-regular);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.015em;

  /* Text - 01 */

  color: #FFFFFF;

  outline: 0;


  transition: background-color 0.2s ease;

  height: 40px;
  /* 01 */

  background: linear-gradient(270deg, rgba(255, 209, 76, 0.8) -9.33%, rgba(215, 20, 219, 0.8) 49.9%, #361499 106.72%);
  border-radius: 10px;

  border: none;
  outline: none;
  cursor: pointer;
`;

const BtnAccount = styled.button.attrs({
    type: 'button'
})`
  padding: 10px 38.5px;
  font-family: var(--ff-regular);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.015em;


  /* Inside Auto Layout */

  /* Text - 01 */
  outline: 0;
  transition: background-color 0.2s ease;
  /* 01 */


  outline: none;
  cursor: pointer;


  position: relative;

  //border: 1.5px solid transparent;
  //border-radius: 10px;
  //background: #0B0B0B;
  //background-clip: padding-box;
  //
  //::after {
  //  position: absolute;
  //  top: -2px;
  //  bottom: -2px;
  //  left: -2px;
  //  right: -2px;
  //  background: linear-gradient(270deg, rgba(255, 209, 76, 0.8) -9.33%, rgba(215, 20, 219, 0.8) 49.9%, #361499 106.72%);
  //  content: '';
  //  z-index: -1;
  //  border-radius: 10px;
  //}


  //background: linear-gradient(247.28deg, #241F24 18%, #1D1C20 88.39%);

  background: #0B0B0B;
  border-radius: 10px;

  border: 1.5px solid transparent;

  ::before {
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    border-radius:10px;
    padding: 2px;
    background: linear-gradient(
            270deg,rgba(255,209,76,0.8) -9.33%,rgba(215,20,219,0.8) 49.9%,#361499 106.72%);
    -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  p {
    margin: 0;
    padding: 0;
    background: linear-gradient(270deg, rgba(255, 209, 76, 0.8) -9.33%, rgba(215, 20, 219, 0.8) 49.9%, #361499 106.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Header;
