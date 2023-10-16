import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar as SidebarPro,
  menuClasses,
} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollepsed, setIsCollepsed] = useState(false);
  // const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
      }}
    >
      <SidebarPro collapsed={isCollepsed} backgroundColor={colors.primary[400]}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollepsed(!isCollepsed)}
            icon={isCollepsed ? <MenuOutlinedIcon /> : undefined}
            // icon={<MenuOutlinedIcon />}
            rootStyles={{
              ["." + menuClasses.button]: {
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              },
            }}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollepsed && (
              <Box>
                <Typography>Vyakar</Typography>
                <IconButton>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Menu>
      </SidebarPro>
    </Box>
  );
};

export default Sidebar;
