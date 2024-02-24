import '../utils/index.css'
import { Box, List, ListItem, Paper, Typography } from "@mui/material"
import ServiceImg from '../utils/imgs/serviceimg.jpeg'
import {ReactComponent as Interior} from '../utils/svgs/interior.svg'
import {ReactComponent as Arch} from '../utils/svgs/arch.svg'
import {ReactComponent as Exterior} from '../utils/svgs/exterior.svg'
export const Service=()=>{
    return (
        <Box className="service-box" sx={{background:'white'}}>
         <h1 className="head1"  marginX={'auto'}>Service Provided By Us</h1>
            <div id="Service">
                <Box className='serviceimg'>
                    <img style={{width: '100%'}} src={ServiceImg} alt="Interior"/>
                </Box>
                <Box className="description" >
                   
                    <Box sx={{display:'flex', gap:'30px'}}>
                    <div style={{textAlign:'left', width:'50%'}}>
                    <h6>Residential Design</h6>
                        <p> From new home construction to complete home
                        renovations.</p>
                        <p>✔️Full-service design</p>
                        <p>✔️Space Planning</p>
                        <p>✔️Custom furniture design</p>
                    </div>
                    <div style={{textAlign:'left', width:'50%'}}>
                    <h6>Commerical Design</h6>
                     <p> We specialize in creating inspiring work
                        environments that drive productivity and
                        engagement.</p>
                        <p>✔️Office design</p>
                        <p>✔️Retail Design</p>
                        <p>✔️Hospitality</p>
                    </div>
                    </Box>
                    
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