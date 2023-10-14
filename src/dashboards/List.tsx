import { Accordion, AccordionSummary, Typography, AccordionDetails, Box, useTheme, Stack } from '@mui/material'
import data from '../data/portfolio.json';
import earningData from '../data/earningData.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function List() {
  const theme = useTheme();
  return (
    <div>
        <div>List</div>
       {
        data.list.map((item)=><div>
          <Accordion sx={{width:"100%"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.symbol}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack sx={{height:"200px",  overflowY:"scroll"}}>
              <div>Yearly earnings</div>
              <div style={{display:'flex', alignItems:"stretch"}}>                
              {
                earningData.find((earningItem)=>earningItem.symbol === item.symbol)?.annualEarnings.map(
                  (annualItem, index)=>
                  // <div><div>{(new Date(annualItem.fiscalDateEnding)).getFullYear()}</div><div>{annualItem.reportedEPS}</div></div>
                  {
                    if(index>10)
                    {
                      return null;
                    }
                  return <Box component="span" sx={{ p: 2, border: '1px solid grey' }}><div>{(new Date(annualItem.fiscalDateEnding)).getFullYear()}</div><div>{annualItem.reportedEPS}</div></Box>
                  })
              }
              </div>
              </Stack>
            

              <div>Quarterly earnings</div>
              <div style={{display:'flex', alignItems:"stretch"}}>
                
              {
                earningData.find((earningItem)=>earningItem.symbol === item.symbol)?.quarterlyEarnings.map(
                  (annualItem, index)=>{
                    if(index > 10) return null;
                    const date = new Date(annualItem.fiscalDateEnding);
                    const year = date.getFullYear();
                    const month = date.toLocaleString('default',{month:'short'});
                    

                    return <Box component="span" sx={{ p: 2, border: '1px solid grey' }}><div>{ month + "-" + year.toString()  }</div>
                      <div style={{color: Number(annualItem.reportedEPS)>=0?theme.palette.success.dark:theme.palette.error.dark}}>{annualItem.reportedEPS} </div>
                    </Box>
                  }
                  // <div><div>{(new Date(annualItem.fiscalDateEnding)).getFullYear()}</div><div>{annualItem.reportedEPS}</div></div>
                  
                )
              }
              </div>
            </AccordionDetails>
          </Accordion>
        </div>)
       }
        
    </div>
    
  )
}

export default List