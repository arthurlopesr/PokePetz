import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header/Header";
import GlobalStyles from "../styles/theme/global";
import { theme } from "../styles/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
