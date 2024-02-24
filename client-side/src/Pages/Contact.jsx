import '../utils/index.css'
import { Box, Button, Paper } from "@mui/material"
import {ReactComponent as Whatsapp} from '../utils/svgs/whatsapp.svg'
import {ReactComponent as Email} from '../utils/svgs/email.svg' 
import HussainImg from '../utils/imgs/hussain.png'
import AnwarImg from '../utils/imgs/anwar.png'
export const Contact=()=>{
    return (
        <Box id="Contact">
        <h1>Conntact Us</h1>
        <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}} >
            
            <Box sx={{display:'flex',gap:'20px',flexWrap:'wrap', justifyContent:'center', width:{xs:'100%', sm:'90%', md:'80%'}}}>
                <Box>
                    <img style={{height:'500px', width:'350px'}} src={HussainImg} alt="Hussain"/>
                    <h2>Hussain Banegar</h2>
                    <h4>Principal Architect</h4>
                </Box>
               
                <Box>
                    <img style={{ height:'500px',width:'350px'}} src={AnwarImg} alt="Anwar"/>
                    <h2>Anwar Bhure</h2>
                    <h4>Senior Engineer</h4>
                    
                </Box>
                <Paper elevation={3} className='contactPaper'>
                    <h3>Start Project with us?</h3>
                    <p>Our firm has a rich history of providing the
                    highest quality interior design work to our clients, and we're excited to show
                    you what we can do.</p>
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                    <Button sx={{background:'#F6862A'}} variant="contained"><span style={{marginRight:'2px'}}><Whatsapp/></span>Whatsapp</Button>
                    <Button sx={{background:'#F6862A'}} variant="contained"><span style={{marginRight:'2px'}}><Email/></span>Email</Button>
                    </div>
            </Paper>    
            </Box>
        
        </div>
        </Box>
    )
}