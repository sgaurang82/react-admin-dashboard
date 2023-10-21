import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import UserForm from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<UserForm />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
