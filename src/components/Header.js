import React from "react";
import styled from "styled-components";
import Link from 'next/link';

const Header = () => {
    const renderRightMenus = () => {
        return (
            <RightWrapper>
                <BtnAuth>Connect</BtnAuth>
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
                        {/*<Logo />*/}
                    </a>
                </Link>
            </LeftWrapper>
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
  padding-left: 16px;
  padding-right: 8px;
  height: var(--header-height);
  z-index: var(--z-header-revised);
  background: #162349;
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
    width: 32px;
  }

  @media (min-width: 1100px) {
    .logo {
      display: initial;
      width: auto;
    }
  }
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
  margin-left: 12px;
  padding: 0px 16px;
  height: 36px;
  font-family: var(--ff-regular);
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  outline: 0;
  transition: background-color 0.2s ease;

  background-color: #6100d4;
  border: none;
  outline: none;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(to bottom right,white 0%,#e6e4ff 70%);
    color: black;
  }
`;

export default Header;
