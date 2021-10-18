import React from "react";
import styled from "styled-components";
import TokenSwap from "./TokenSwap";

function SwapContent() {
    return (
        <Container>
            <WrapperFirst>
                <ChartWrapper>

                </ChartWrapper>
                <ContainerSwap>
                    <SwapWrapper>
                        <HeaderSwap>
                            <TitleText>
                                Swap
                            </TitleText>
                            <RightHeader>
                                <ReloadIcon src="/static/icon/reload-icon.svg"/>
                                {true ?
                                    <BookMarkIcon src="/static/icon/star-icon.svg"/> :
                                    <BookMarkedIcon src="/static/icon/star-full-icon.svg"/>}
                            </RightHeader>
                        </HeaderSwap>
                        <Swap>
                            <TokenSwap title={"From"}></TokenSwap>
                            <SwapToken>
                                <BtnSwapToken><SwapTokenIcon src="/static/icon/swap-org.svg"/></BtnSwapToken>
                            </SwapToken>
                            <TokenSwap title={"To"}></TokenSwap>
                        </Swap>
                    </SwapWrapper>
                    <SwapInfo>
                        <BtnSwap>
                            Swap
                        </BtnSwap>
                        <DetailSwap>
                        </DetailSwap>
                    </SwapInfo>
                </ContainerSwap>
            </WrapperFirst>
            <BreakLine/>
            <WrapperSecond>
                <InfoWrapper>
                    <HeaderTitle> Avalanche Statistics </HeaderTitle>
                </InfoWrapper>
                <BookmarkWrapper>
                    <BookMarkContent>
                        <HeaderTitle> Pair </HeaderTitle>
                    </BookMarkContent>
                </BookmarkWrapper>
            </WrapperSecond>
            <BreakLine/>
            <WrapperThird>

            </WrapperThird>
        </Container>
    );
}

const Container = styled.div`
  padding: 51px 24px 0px 24px;
`;
const WrapperFirst = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`
const BreakLine = styled.div`
  margin: 70px 0;
  height: 3px;
  width: 100%;
  /* 02 */
  background: linear-gradient(274.51deg, rgba(215, 20, 219, 0) -8.51%, #361499 100.64%);
`
const WrapperSecond = styled.div`
  display: flex;
  justify-content: center;
`
const WrapperThird = styled.div`
  display: flex;
  justify-content: center;
`
const InfoWrapper = styled.div`
  position: relative;
  flex: 1 1 70%;
  min-height: 727px;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-right: 70px;

  position: relative;

  //background: linear-gradient(247.28deg, #241F24 18%, #1D1C20 88.39%);

  background: rgba(32, 31, 37, 0.34);
  border-radius: 10px;

  border: 1px solid transparent;

  padding: 20px;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

`;
const ChartWrapper = styled.div`
  position: relative;
  flex-basis: 100%;
  border: 1px solid red;
  min-height: 727px;
  grid-column-start: 1;
  grid-column-end: 3;
  @media (min-width: 768px) {
    flex-basis: 100%;
  }
  @media (min-width: 1024px) {
    flex-basis: 65%;
  }
  @media (min-width: 1440px) {
    flex-basis: 70%;
  }
`;

const ContainerSwap = styled.div`
  min-height: 727px;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 100%;
  }
  @media (min-width: 1024px) {
    flex-basis: 35%;
  }
  @media (min-width: 1440px) {
    flex-basis: 30%;
  }
`

const BookmarkWrapper = styled.div`
  flex: 1 1 30%;
`

const BookMarkContent = styled.div`
  position: relative;
  min-height: 430px;

  //background: linear-gradient(247.28deg, #241F24 18%, #1D1C20 88.39%);

  background: rgba(32, 31, 37, 0.34);
  border-radius: 10px;

  border: 1px solid transparent;
  padding: 15px;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

const SwapWrapper = styled.div`
  position: relative;

  //border: 1px solid red;
  min-height: 422px;

  background: linear-gradient(247.28deg, #241F24 18%, #1D1C20 88.39%);

  border: 1.5px solid transparent;
  border-radius: 10px;
  //background: #0B0B0B;
  background-clip: padding-box;

  padding: 20px 15px;

  ::after {
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
    content: '';
    z-index: -1;
    border-radius: 10px;
  }
`;
const SwapInfo = styled.div`
  margin-left: 10px;
`

const BtnSwap = styled.button.attrs({
    type: 'button'
})`

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  width: 100%;

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
  /* button-shadow */

  box-shadow: 0px 0px 5px rgba(252, 192, 253, 0.12), 0px 0px 16px rgba(248, 129, 221, 0.18);
  border-radius: 10px;

  border: none;
  outline: none;
  cursor: pointer;

`;
const DetailSwap = styled.div`
  min-height: 235px;
  /* dark 4 */
  background: linear-gradient(247.28deg, #241F24 18%, #1D1C20 88.39%);
  border-radius: 10px;
`;

const HeaderSwap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Swap = styled.div`
  margin-top: 21px;
`
const SwapToken = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px auto 0;
`
const BtnSwapToken = styled.button.attrs({
    type: 'button'
})`
  outline: 0;
  height: 34px;
  width: 34px;
  /* 01 */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E88F35;
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;

  border: none;
  outline: none;
  cursor: pointer;
`;

const SwapTokenIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const TitleText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  /* identical to box height, or 119% */

  letter-spacing: 0.015em;

  /* Text - 01 */

  color: #FFFFFF;
`;

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  gap: 16.67px;
`;

const ReloadIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const BookMarkIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const BookMarkedIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const HeaderTitle = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 0;

  font-family: var(--ff-regular);
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  /* identical to box height, or 119% */

  letter-spacing: 0.015em;

  /* Text - 01 */

  color: #FFFFFF;

  height: 40px;
  /* 01 */
  background: linear-gradient(274.51deg, rgba(215, 20, 219, 0) -8.51%, #361499 100.64%);

  border-radius: 10px 10px 0px 0px;
  /* button-shadow */

`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default SwapContent;
