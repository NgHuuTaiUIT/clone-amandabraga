import Head from "next/head";
import React, { ReactNode } from "react";
import { Box } from "rebass";
import { Container } from "../common/Container";
export interface LayoutProps {
  children: ReactNode;
}

const MainLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nguyen Huu Tai - Homepage</title>
      </Head>
      {/* <Navbar path={router.path} /> */}
      <Container>{children}</Container>
    </Box>
  );
};

export default MainLayout;
