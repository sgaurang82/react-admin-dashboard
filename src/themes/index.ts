import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
      logo: {
        color: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      logo?: {
        color?: string;
      };
    }
  }

// color palette: https://colorhunt.co/palette/ebe4d1b4b4b326577ce55604
  const theme = createTheme({
    palette: {
      background:{
        default:"#EBE4D1"
      },
      primary: {
        main: '#26577C',
        light: '#26577C',
        dark: '#26577C',
      },
      secondary: {
        main: '#B4B4B3',
        light: '#B4B4B3',
        dark: '#B4B4B3',
      },
      text:{
        primary: "#26577C"
      },
      
     
      
    },
    
  },
    {
    
    logo: {
      color: '#E55604',
    },
  });

    export default theme;