import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Toolbar } from "@mui/material";
import { List, CssBaseline, Typography, Divider, Button } from "@mui/material";
import { IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  BrowserRouter,
  NavLink,
  withRouter,
  useHistory,
} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./admin.css";
import {
  AppBar,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Drawer,
  DrawerHeader,
} from "./admin.styles";

function AdminDashboard({ children }) {
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [exit, setExit] = useState(true);

  const handleClick = () => {
    setExit(!exit);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    window.location.pathname = "/";
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button color="inherit" onClick={handleLogOut}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <BrowserRouter>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />

          <List>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon sx={{ color: "inherit" }}>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Account" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={exit} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={NavLink}
                  to="/settings"
                  onClick={() => history.push("/settings")}
                >
                  <ListItemIcon
                    sx={{
                      color: "inherit",
                      "& .Mui-active": { color: "white" },
                    }}
                  >
                    <AdminPanelSettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </List>
            </Collapse>

            <Divider />

            <ListItemButton
              component={NavLink}
              to="/dashboard"
              onClick={() => history.push("/dashboard")}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                  "& .Mui-active": { color: "white" },
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton
              component={NavLink}
              to="/catalog"
              onClick={() => history.push("/catalog")}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                  "& .Mui-active": { color: "white" },
                }}
              >
                <DynamicFormIcon />
              </ListItemIcon>
              <ListItemText primary="Entity Catalog" />
            </ListItemButton>
          </List>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default withRouter(AdminDashboard);
