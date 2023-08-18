import { Box, Paper, Avatar } from "@mui/material"
import {ReactComponent as Quotes} from '../utils/svgs/quotes.svg'
export const Testimony=()=>{
    return (
        <div id="Testimony" style={{height:'500px', width:'100%', padding:'40px 80px'}}>
            <p  style={{color:'#F6862A'}}>Testimonials</p>
            <h2  style={{color:'#F6862A'}}>- What our clients has to say -</h2>
            <Box width={'80%'} sx={{ alignContent:'center',display:'flex',justifyContent:"space-between", gap:'40px', margin:'40px auto'}}>
                <Paper sx={{position:"relative"}}>
                <Quotes style={{height:'40px', width:'40px', position:'absolute', left:'2'}}/>  
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{margin:'20px auto'}}/>
                    <h1>Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos hic nobis delectus accusantium ea dicta earum et doloribus eius, velit assumenda soluta porro magnam exercitationem? Fugiat libero asperiores totam!</p>
                </Paper>
                <Paper sx={{position:"relative"}}>
                <Quotes style={{height:'40px', width:'40px', position:'absolute', left:'2'}}/>  
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{margin:'20px auto'}}/>
                    <h1>Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos hic nobis delectus accusantium ea dicta earum et doloribus eius, velit assumenda soluta porro magnam exercitationem? Fugiat libero asperiores totam!</p>
                </Paper>
                <Paper sx={{position:"relative"}}>
                <Quotes style={{height:'40px', width:'40px', position:'absolute', left:'2'}}/>  
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{margin:'20px auto'}}/>
                    <h1>Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos hic nobis delectus accusantium ea dicta earum et doloribus eius, velit assumenda soluta porro magnam exercitationem? Fugiat libero asperiores totam!</p>
                </Paper>
            </Box>
        </div>
    )
}