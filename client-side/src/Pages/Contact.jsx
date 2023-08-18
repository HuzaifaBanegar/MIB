import '../utils/index.css'
import { Box, Button, Paper } from "@mui/material"
import {ReactComponent as Whatsapp} from '../utils/svgs/whatsapp.svg'
import {ReactComponent as Email} from '../utils/svgs/email.svg' 

export const Contact=()=>{
    return (
        <div id="Contact">
            <Paper elevation={3} className='contactPaper'>
                <h3>Start Project with us?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium excepturi cupiditate fuga asperiores mollitia earum reprehenderit, odit magnam nostrum reiciendis delectus voluptates eligendi repellat nesciunt, corrupti itaque laborum minus?</p>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                <Button sx={{background:'#F6862A'}} variant="contained"><span style={{marginRight:'2px'}}><Whatsapp/></span>Whatsapp</Button>
                <Button sx={{background:'#F6862A'}} variant="contained"><span style={{marginRight:'2px'}}><Email/></span>Email</Button>
                </div>
                
            </Paper>
        </div>
    )
}