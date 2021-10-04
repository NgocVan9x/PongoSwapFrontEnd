import Head from 'next/head'
import styled from 'styled-components'

const Template404 = ({ errorMsg }) => {
  return (
    <Page>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <Container>
        <BackBtn
          onClick={(e) => {
            window.location = '/'
          }}
        >
          Back
        </BackBtn>
        <div>
          <Heading>404</Heading>
          <p>Sorry... we couldn’t find the page you are looking for.</p>
          {/*{(DEBUG && <p>{errorMsg}</p>) || ''}*/}
        </div>
      </Container>
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  padding-top: var(--header-height);
  padding-left: 2em;
  padding-right: 2em;
`

const BackBtn = styled.button`
  display: block;
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
`

const Container = styled.div`
  position: relative;
  padding-top: 4em;
  padding-bottom: 4em;
  text-align: center;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    height: 209px;
  }
`

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 124px;
  line-height: 1;
  font-weight: 600;
`

const SubHeading = styled.h2`
  margin-top: 6px;
  margin-bottom: 0;
  font-size: 24px;
  line-height: 1;
  font-weight: 600;
`

export default Template404
