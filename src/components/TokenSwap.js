import styled from "styled-components";

const TokenSwap = ({title})=>{
    return <Wrapper>
            <Title>{title}</Title>
        <Content></Content>
    </Wrapper>
}
const Wrapper = styled.div``;

const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.015em;

  /* Text - 02 */

  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 9px;
`;
const Content = styled.div`
  background: #2E2C34;
  border-radius: 10px;
  min-height: 105px;
`;

export default TokenSwap