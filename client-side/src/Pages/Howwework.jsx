import { Box, Paper } from "@mui/material"
import '../utils/index.css'
import ConcreteRoom from '../utils/imgs/concretewall.png'

export const HowWeWork=()=>{
    return (
        <Box id="HowWeWork">
            <div className="layer"></div>
            <Box sx={{width:{xs:'100%', sm:'100%',md:'80%'},display:{md:'flex'},gap:'20px', justifyContent:'space-evenly', position:'absolute',top:{xs:'5%',md:'25%'}, right:0}}>
                <Paper sx={{p:{xs:4,md:6}, textAlign:'left', marginBottom:{xs:'10px',md:0}}} >
                    <h1 style={{color:'#F6862A'}}>
                        01
                    </h1>
                    <h3>
                        Contact Us
                    </h3>
                    <p>
                        Ready to start your next
                        interior design project? We'd
                        love to hear from you!
                        Contact us today to schedule
                        a consultation.
                    </p>
                    <p>Call us : 7977160165</p>
                </Paper>
                <Paper sx={{p:{xs:4,md:6}, textAlign:'left',marginBottom:{xs:'10px',md:0}}} >
                    <h1 style={{color:'#F6862A'}}>
                        02
                    </h1>
                    <h3>
                    View Our Portfolio
                    </h3>
                    <p>Check out our past work to
                    get an idea of our design style
                    and level of expertise. Visit
                    our website to view our
                    portfolio.</p>
                </Paper>
                <Paper sx={{p:{xs:4,md:6}, textAlign:'left'}} >
                    <h1 style={{color:'#F6862A'}}>
                        03
                    </h1>
                    <h3>
                    Follow Us on Social Media
                    </h3>
                    <p>Stay up -to -date on our latest
                    projects and design
                    inspiration by following us on
                    social media.
                    </p>
                    <p>@mib_design_studio.</p>
                </Paper>
            </Box>

        </Box>
    )
}