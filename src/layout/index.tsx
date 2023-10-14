import { Box } from '@mui/material'
import React from 'react'
import Dashboard from '../dashboards'
import Header from './Header'

function Layout() {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
        <Header/>
        <Dashboard/> 
        
    </Box>

  )
}

export default Layout