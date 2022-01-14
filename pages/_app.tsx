import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/main";
import theme from "../utils/theme";
import { Fonts } from "../components/common/fonts";
import CustomCursor from "../components/common/custom-cursor";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Myapp");
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <CustomCursor />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
