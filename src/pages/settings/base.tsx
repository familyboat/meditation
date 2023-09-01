import { Box, Paper } from "@mui/material";
import React from "react";

type BaseProps = {
  heading?: React.ReactNode;
  subHeading?: React.ReactNode;
  children?: React.ReactNode;
};

export default function Base({
  heading,
  subHeading,
  children,
}: BaseProps) {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          padding: '0.6rem'
        }}
      >
        <Box
          sx={{
            flex: "1 1 0",
          }}
        >
          <Box
            sx={{
              fontWeight: 600,
            }}
          >
            {heading}
          </Box>
          <Box
            sx={{
              fontSize: "0.8rem",
            }}
          >
            {subHeading}
          </Box>
        </Box>
        {children}
      </Paper>
    </>
  );
}
