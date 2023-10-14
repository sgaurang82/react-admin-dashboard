import AppBar from '@mui/material/AppBar';
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar, Typography } from '@mui/material';

function Header() {
  
  return (
    <AppBar><Toolbar>
    <IconButton style={{ color: "white" }} edge="start">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">Vyakar</Typography>
  </Toolbar></AppBar>
  )
}

export default Header