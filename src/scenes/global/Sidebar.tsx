import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { ReactNode, useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar as SidebarPro,
  menuClasses,
} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
interface ItemProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const Item = (props: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={props.selected == props.title}
      style={{ color: colors.grey[100] }}
      icon={props.icon}
      onClick={() => {
        props.setSelected(props.title);
      }}
      component={<Link to={props.to} />}

      // href={props.to}
    >
      <Typography>{props.title}</Typography>
      {/* <Link to={props.to} /> */}
      {/* <Link to={props.to}></Link> */}
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollepsed, setIsCollepsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
      }}
    >
      <SidebarPro
        rootStyles={{
          ["." + menuClasses.button]: {
            "&:hover": {
              backgroundColor: "transparent !important",
              color: "#868dfb !important",
            },
          },
        }}
        collapsed={isCollepsed}
        backgroundColor={colors.primary[400]}
      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollepsed(!isCollepsed)}
            icon={isCollepsed ? <FilterVintageIcon /> : undefined}
            // icon={<MenuOutlinedIcon />}

            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollepsed && (
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <FilterVintageIcon fontSize="large" />
                  <Typography sx={{ marginLeft: "10px" }} variant="h3">
                    Vyakar
                  </Typography>
                </Box>
                <Box display="flex">
                  <IconButton>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollepsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.greenAccent[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.greenAccent[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </SidebarPro>
    </Box>
  );
};

export default Sidebar;
