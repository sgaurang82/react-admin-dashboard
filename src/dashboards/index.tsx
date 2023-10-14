import React from 'react'
import List from './List'
import { Button } from '@mui/material';

function Dashboard() {
  return (
    <div>
        <Button color="primary"> Dashboard</Button>
        <div style={{padding:"8px"}}>
          <List></List>
        </div>
    </div>
  )
}

export default Dashboard