import '../utils/index.css'
import { Box, Paper, Typography } from "@mui/material"
import ServiceImg from '../utils/imgs/serviceimg.jpeg'
import {ReactComponent as Interior} from '../utils/svgs/interior.svg'
import {ReactComponent as Arch} from '../utils/svgs/arch.svg'
import {ReactComponent as Exterior} from '../utils/svgs/exterior.svg'
export const Service=()=>{
    return (
        <Box className="service-box" sx={{background:'white'}}>
            <div id="Service">
                <Box className='serviceimg'>
                    <img style={{width: '100%'}} src={ServiceImg} alt="Interior"/>
                </Box>
                <Box className="description" >
                    <h2 className="head1"  marginX={'auto'}>Service Provided By Us</h2>
                    <p className="desc1" style={{textAlign:'justify', marginTop:"3px"}}> With expertise in interior design, architecture, and exterior aesthetics, we transform spaces into captivating masterpieces. Our innovative designs harmonize beauty and practicality, crafting environments that inspire and elevate. Experience the art of architectural excellence with us.</p>
                </Box>
            </div>
            <h2 className="head1"  marginX={'auto'}>Our Design Philosophy</h2>
            <div className='service-icons'>
                
                <Paper className='service-papers' elevation={3} >
                    <Interior style={{margin:'0 auto'}} />
                    <h2 className='head1'>Collaboration</h2>
                    <p className='desc1'>
                        We partner closely with
                        our clients to understand
                        their unique vision and
                        needs, and to incorporate
                        their personal style into
                        each design.
                    </p>
                </Paper>
                <Paper className='service-papers' elevation={3} >
                    <Arch style={{margin:'0 auto', width:'100px',height:'100px'}}/>
                    <h2 className='head1'>Functionality</h2>
                    <p className='desc1'>
                        We prioritize functional
                        design that enhances our
                        clients' daily lives, ensuring
                        that every space is both
                        beautiful and livable.
                    </p>
                </Paper>
                <Paper className='service-papers' elevation={3} >
                    <Exterior style={{margin:'0 auto',  width:'100px',height:'100px'}}/>
                    <h2 className='head1'>Eco-Friendliness</h2>
                    <p className='desc1'>
                        We strive to incorporate
                        sustainable design
                        strategies and materials
                        into each of our projects
                        for a healthier, more eco -
                        friendly future.
                    </p>
                </Paper>
                

            </div>

        </Box>
    )
}