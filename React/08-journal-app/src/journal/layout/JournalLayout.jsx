import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => (
  <Box
    sx={{ display: "flex" }}
    className="animate__animated animate__fadeIn animate__faster"
  >
    {/* Navbar drawerWidth */}
    <Navbar drawerWidth={drawerWidth} />
    {/* Sidebar drawerWidth */}
    <Sidebar drawerWidth={drawerWidth} />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* Toolbar */}
      <Toolbar />
      {children}
    </Box>
  </Box>
);
