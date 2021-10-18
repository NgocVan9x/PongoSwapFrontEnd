import styled from "styled-components";
import NumericalInput from "./NumericalInput";

const TokenSwap = ({title}) => {
    return <Wrapper>
        <Title>{title}</Title>
        <Content>
            <InputWrapper>
                <>
                    <NumericalInput
                        className="token-amount-input"
                        value={""}
                    />
                    <BtnMax>
                        max
                    </BtnMax>
                </>
                <CurrencySelectButton>
                    <Logo src={'/static/logo/AVAX.svg'}/>
                    Avax
                    <IconDrop src={'/static/icon/down.svg'}/>
                </CurrencySelectButton>
            </InputWrapper>
            <Info>
                <Balance>Balance: 0.0</Balance>
                <BtnCopy>Copy address</BtnCopy>
            </Info>
        </Content>
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
  padding: 15px 12px;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: linear-gradient(100.23deg, rgba(11, 11, 11, 0.56) 6.09%, rgba(41, 37, 38, 0.105) 87.43%);
  /* Text - 03 */

  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
`

const CurrencySelectButton = styled.button.attrs({type: 'button'})`
  margin-left: 10px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Highlight - 2 */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  text-align: right;
  letter-spacing: 0.015em;

  /* Text - 01 */

  text-transform: uppercase;
  color: #FFFFFF;
`
const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 3.25px;
`
const IconDrop = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 3.25px;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 11px;
`
const BtnCopy = styled.button.attrs({
    type: 'button'
})`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  letter-spacing: 0.02em;

  color: #FFFFFF;

  outline: 0;
  /* 01 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;

  border: none;
  outline: none;
  cursor: pointer;
`
const BtnMax = styled.button.attrs({
    type: 'button'
})`
  /* Body 2 */

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  /* 04 */

  color: #E88F35;

  outline: 0;
  /* 01 */
  justify-content: center;
  /* Note: backdrop-filter has minimal browser support */
  border: none;
  outline: none;
  cursor: pointer;
`
const Balance = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.015em;

  color: #FFFFFF;

`
export default TokenSwap