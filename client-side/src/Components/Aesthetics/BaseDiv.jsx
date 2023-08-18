import { Box } from "@mui/material"
import Baseimg from '../../utils/imgs/base.png'
export const BaseDiv=()=>{
    return (
        <div style={{background:'white',display:'flex', justifyContent:'space-between', padding:'40px 80px'}}>
            <img src={Baseimg}></img>
            <Box style={{margin:'0px auto'}}>
                <h1 style={{fontSize:'80px'}}>We <span  style={{color:'#F6862A'}}>M</span>ake <span  style={{color:'#F6862A'}}>I</span>t <span  style={{color:'#F6862A'}}>B</span>elieve</h1>
            </Box>
        </div>
    )
}