import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { Menu, MenuItem, Sidebar as SidebarPro } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollepsed, setIsCollepsed] = useState(false);
  // const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <SidebarPro collapsed={isCollepsed} backgroundColor={colors.primary[400]}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollepsed(!isCollepsed)}
            icon={isCollepsed ? <MenuOutlinedIcon /> : undefined}
            // icon={<MenuOutlinedIcon />}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollepsed && (
              <Box>
                {" "}
                <Typography>Vyakar</Typography>{" "}
                <IconButton>
                  <MenuOutlinedIcon />
                </IconButton>{" "}
              </Box>
            )}
          </MenuItem>
        </Menu>
      </SidebarPro>
    </Box>
  );
};

export default Sidebar;
