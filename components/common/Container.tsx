import { ReactNode } from "react";
import { Box } from "rebass";

interface ContainerProps {
  children: ReactNode;
  maxWidth?: number | string;
  mx?: number | string;
  px?: number | string;
}

export const Container = ({
  children,
  maxWidth = 1080,
  mx = "auto",
  px = 3
}: ContainerProps) => (
  <Box
    sx={{
      maxWidth,
      mx,
      px
    }}>
    {children}
  </Box>
);
