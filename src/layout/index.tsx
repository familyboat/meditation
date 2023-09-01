import { Outlet } from "react-router-dom";
import NavMenu from "./navMenu";
import { Box, Paper } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Box sx={{
        padding: '2rem 2rem 4rem'
      }}>
        <Outlet />
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <NavMenu />
      </Paper>
    </>
  );
}
