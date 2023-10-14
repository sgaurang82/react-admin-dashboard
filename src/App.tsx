import React, { useEffect, useState } from 'react';

import './App.css';

import theme from './themes';

import { ThemeProvider } from "@mui/material/styles";
import Dashboard from './dashboards';
import CssBaseline from "@mui/material/CssBaseline";
import Layout from './layout';
import axios from 'axios';



function App() {
  useEffect(() => {
    
    axios.get("https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=I04T80M9FZE3JJC5&datatype=json").then((result)=>{
      console.log(result);
    })
    
    
  }, [])
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>        
        <Layout/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
