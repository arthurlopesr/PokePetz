import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import GlobalStyles from "../styles/theme/global";
import { theme } from "../styles/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
