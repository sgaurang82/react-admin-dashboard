import { useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { mockDataTeam } from "../../data/mockData";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },

    {
      field: "age",
      type: "number",
      headerName: "Age",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          justifyContent={"center"}
          bgcolor={
            access === "admin"
              ? colors.greenAccent[600]
              : colors.greenAccent[700]
          }
          borderRadius={"4px"}
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access == "manager" && <LockOpenOutlinedIcon />}
          {access == "user" && <SecurityOutlinedIcon />}
        </Box>
      ),
    },
  ];
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the team members" />
      <Box m="40px 0 0 0" height={"75vh"}>
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
