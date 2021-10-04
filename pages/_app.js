import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from "../src/Styles.global.style";
import {themeGl} from "../src/Styles.global.theme";
import dynamic from "next/dynamic";
import {ToastContainer} from "react-toastify";
import DefaultLayout from "../src/Layout/DefaultLayout";
import Template404 from "../src/components/Error/404";
import { Web3ReactProvider } from '@web3-react/core'
import {getLibrary} from "../src/utils/web3React";
import {ModalProvider} from "../src/components/Modal";

const TopProgressBar = dynamic(
    () => {
        return import("../src/components/TopProgressBar");
    },
    {ssr: false},
);

export default function App({Component, pageProps}) {

    const Layout = Component.Layout || DefaultLayout;
    const {statusCode, error, errorObj} = pageProps;
    const hasError = !!statusCode && statusCode !== 200; // not 0 or 200
    return (
        <>
            <ThemeProvider theme={themeGl}>
                <GlobalStyle/>
                <TopProgressBar/>
                {hasError ? (
                        <Template404
                            statusCode={statusCode}
                            error={error}
                            errorObj={errorObj}
                        />
                    ) :
                    <Web3ReactProvider getLibrary={getLibrary}>
                        <ModalProvider>
                            <Layout {...pageProps}>
                                <Component {...pageProps} />
                            </Layout>
                        </ModalProvider>
                    </Web3ReactProvider>}
                <ToastContainer
                    position="top-right"
                    autoClose={8000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    draggable={false}
                    pauseOnVisibilityChange
                    closeOnClick
                    pauseOnHover
                />
            </ThemeProvider>
        </>
    )
}
