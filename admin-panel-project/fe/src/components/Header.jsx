import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
export default function Header({ setMobileOpen, mobileOpen }) {
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar
     position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
       
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Admin panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
