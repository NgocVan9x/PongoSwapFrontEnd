import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = ({children}) =>
    <Wrapper>
        <Header/>
        <Container>
            {children}
        </Container>
        <Sidebar/>
    </Wrapper>

const Wrapper = styled.div``;

const Container = styled.div`
  //max-width: 1280px;
  margin-left: 24px;
  padding-top: var(--header-height);
  padding-bottom: 64px;

  @media (min-width: 720px) {
    margin: 0 0 0 16px;
  }

  @media (min-width: 1152px) {
    margin-left: calc(var(--w-local-menu) + 24px);
  }

  @media (min-width: 1664px) and (max-width: 1963px) {
  }

  @media (min-width: 1964px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
export default Layout