import React from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import {AiFillBank, AiFillInfoCircle, AiOutlinePieChart} from "react-icons/ai";
import { darkThemeColor } from "../utils";

function Sidebar() {
  return (
    <Container>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Home</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Swap</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Liquidity</h3>
          </Link>
          <Link>
            <AiFillBank />
            <h3>Farm</h3>
          </Link>
          <Link>
            <AiFillInfoCircle />
            <h3>Info</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Link>
        </Links>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background: #1b191f;
  pointer-events: auto;
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: auto;
  bottom: 0;
  height: auto;
  width: var(--w-side-bar);
  z-index: var(--z-sidebar);
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: transparent;
  }
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  //padding-top: 2rem;
  //height: 60%;
  padding-left: 0;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  color: #e4e4e4;
  cursor: pointer;
  justify-content: flex-start;
  
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
