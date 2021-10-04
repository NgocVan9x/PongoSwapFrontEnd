import styled from "styled-components";
import Header from "../components/Header";
import {useEffect} from "react";
import useEagerConnect from "../lib/useEagerConnect";

const Layout = ({children}) => {
    useEagerConnect()
    return (
        <Wrapper>
            <Header/>
            <Container>
            {children}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;
const Container = styled.div`
  max-width: 1280px;
  padding-top: var(--header-height);
  padding-bottom: 64px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 1964px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Layout