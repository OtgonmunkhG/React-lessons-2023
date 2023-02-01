import * as React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BungalowRoundedIcon from "@mui/icons-material/BungalowRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Collapse from "@mui/material/Collapse";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Header from ".//Header";
import Menu from "./Menu";

const drawerWidth = 240;

export default function SideBar(props) {
  const [open, setOpen] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Profile", "Dashboard"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? (
                  <AccountCircleIcon />
                ) : (
                  <BungalowRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton onClick={() => {
          setOpen(!open)
        }}>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="E-commerce" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Box  component="ul" sx={{ pl: 2 }}>
                 <li>Product manager</li>
                <li>Product Grid</li>
                <li>Product page</li>
              </Box>
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => {
          setShow(!show)
        }}>
          <ListItemIcon>
            <PersonRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {show ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={show} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Box  component="ul" sx={{ pl: 2 }}>
                 <li>User id </li>
                <li>User</li>
                <li>Product page</li>
              </Box>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Header setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
      <Menu />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
