import { Box, Paper } from "@mui/material"
import '../utils/index.css'
import ConcreteRoom from '../utils/imgs/concretewall.png'

export const HowWeWork=()=>{
    return (
        <Box id="HowWeWork">
            <div className="layer"></div>
            <Box sx={{width:'60%',display:'flex',gap:'20px', justifyContent:'space-evenly', position:'absolute',top:'25%', right:0}}>
                <Paper sx={{p:6, textAlign:'left'}} >
                    <h1 style={{color:'#F6862A'}}>
                        01
                    </h1>
                    <h3>
                       Statement Of The Problem
                    </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolorem labore molestias est rerum mollitia temporibus deserunt, nemo autem, sequi debitis assumenda eius praesentium aspernatur, quas obcaecati corporis aut error.</p>
                </Paper>
                <Paper sx={{p:6, textAlign:'left'}} >
                    <h1 style={{color:'#F6862A'}}>
                        02
                    </h1>
                    <h3>
                       Project Presentation
                    </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolorem labore molestias est rerum mollitia temporibus deserunt, nemo autem, sequi debitis assumenda eius praesentium aspernatur, quas obcaecati corporis aut error.</p>
                </Paper>
                <Paper sx={{p:6, textAlign:'left'}} >
                    <h1 style={{color:'#F6862A'}}>
                        03
                    </h1>
                    <h3>
                       Development of Rendering
                    </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolorem labore molestias est rerum mollitia temporibus deserunt, nemo autem, sequi debitis assumenda eius praesentium aspernatur, quas obcaecati corporis aut error.</p>
                </Paper>
            </Box>

        </Box>
    )
}