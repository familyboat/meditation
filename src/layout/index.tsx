import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import {useEffect} from 'react';
import { updateCountOfVisitApp } from "../db";

export default function Layout() {
  useEffect(() => {
    updateCountOfVisitApp();
  }, [])

  return (
    <>
      <Box sx={{
        blockSize: '100dvh',
      }}>
        <Outlet />
      </Box>
    </>
  );
}
