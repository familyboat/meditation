import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { updateCountOfVisitApp } from "../db";

document.documentElement.style.setProperty(
  "--100vh",
  `${window.innerHeight}px`,
);

export default function Layout() {
  useEffect(() => {
    updateCountOfVisitApp();
  }, []);

  return (
    <>
      <Box
        sx={{
          padding: "1rem 1rem 0",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
