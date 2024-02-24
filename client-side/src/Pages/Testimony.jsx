import { Box, Paper, Avatar } from "@mui/material"
import {ReactComponent as Quotes} from '../utils/svgs/quotes.svg'
export const Testimony=()=>{
    return (
        <div id="Testimony" style={{height:'500px', width:'100%', padding:'40px 80px', margin:'40px auto'}}>
            <p style={{color:'#F6862A'}}>Testimonials</p>
            <h2  style={{color:'#F6862A'}}>- What our clients has to say -</h2>
            <Box width={{xs:'100%',md:'80%'}} sx={{overflowX:{xs:'scroll',md:'visible'}, alignContent:'center',display:'flex',justifyContent:"space-between", gap:'40px', margin:'40px auto'}}>
                <Paper sx={{position:"relative", minWidth:'200px', p:'15px'}}>
                <Quotes style={{height:'40px', width:'40px', position:'absolute', left:'2'}}/>  
                <Avatar alt="Rameez Shaikh" src="/static/images/avatar/1.jpg" sx={{margin:'20px auto'}}/>
                    <h1>Rameez Shaikh</h1>
                    <p>"My home has been transformed
                    into a beautiful and functional
                    space that I absolutely love!"</p>
                </Paper>
                <Paper sx={{position:"relative", minWidth:'200px',p:'15px'}}>
                <Quotes style={{height:'40px', width:'40px', position:'absolute', left:'2'}}/>  
                <Avatar alt="Suchita Samael" src="/static/images/avatar/1.jpg" sx={{margin:'20px auto'}}/>
                    <h1>Suchita Samael</h1>
                    <p>"I couldn't be happier with the
                    level of professionalism and
                    expertise that this firm brought to
                    my project."</p>
                </Paper>
                <Paper sx={{position:"relative",minWidth:'200px',p:'15px'}}>
                <Quotes style={{height:'40px', width:'40px', position:'absolute', left:'2'}}/>  
                <Avatar alt="Ramesh Jairaj" src="/static/images/avatar/1.jpg" sx={{margin:'20px auto'}}/>
                    <h1>Ramesh Jairaj</h1>
                    <p>"I'm so grateful for the
                    opportunity to work with such a
                    talented and supportive team of
                    designers. Thank you!"</p>
                </Paper>
            </Box>
        </div>
    )
}