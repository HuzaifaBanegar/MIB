import { Box, Typography } from "@mui/material"
import {ReactComponent as MIBLogo} from '../utils/svgs/logo.svg'
import {ReactComponent as Insta} from '../utils/svgs/insta.svg'
import {ReactComponent as  Linkdin } from "../utils/svgs/linkedin.svg";
import {ReactComponent as Email} from '../utils/svgs/email.svg';
import {ReactComponent as Whatsapp} from '../utils/svgs/whatsapp.svg'
export const Footer=()=>{
    return (
        <Box sx={{background:'#3A332D', p:'80px 80px',color:'white', display:'flex',flexWrap:'wrap', justifyContent:'space-evenly'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <MIBLogo/>
                <Typography variant="h3" sx={{color:'#F8780F', marginTop:'20px'}}>MIB Design Studio</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <p>Home</p>
                <p>Services</p>
                <p>How we Work</p>
                <p>About us</p>
                <p>Recent Projects</p>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <p>Contact Us on </p>
                <Insta/>
                <Linkdin/>
                <Email/>
                <Whatsapp/>
            </Box>
        </Box>
    )
}