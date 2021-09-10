import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from "../src/Layout";
import {GlobalStyle} from "../src/Styles.global.style";
import {themeGl} from "../src/Styles.global.theme";


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themeGl}>
          <GlobalStyle />
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
    </>
  )
}
