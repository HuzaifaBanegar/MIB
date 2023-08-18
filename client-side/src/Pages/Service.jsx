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
            <div className='service-icons'>
                <Paper className='service-papers' elevation={3} >
                    <Interior style={{margin:'0 auto'}} />
                    <h2 className='head1'>Interior Planning</h2>
                    <p className='desc1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem veniam, dolores itaque laborum sunt doloribus, at voluptatem ex odio deserunt, impedit aliquid aperiam necessitatibus eos fuga commodi unde eligendi!</p>
                </Paper>
                <Paper className='service-papers' elevation={3} >
                    <Arch style={{margin:'0 auto'}}/>
                    <h2 className='head1'>Architecture</h2>
                    <p className='desc1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem veniam, dolores itaque laborum sunt doloribus, at voluptatem ex odio deserunt, impedit aliquid aperiam necessitatibus eos fuga commodi unde eligendi!</p>
                </Paper>
                <Paper className='service-papers' elevation={3} >
                    <Exterior style={{margin:'0 auto'}}/>
                    <h2 className='head1'>Exterior</h2>
                    <p className='desc1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem veniam, dolores itaque laborum sunt doloribus, at voluptatem ex odio deserunt, impedit aliquid aperiam necessitatibus eos fuga commodi unde eligendi!</p>
                </Paper>
                

            </div>

        </Box>
    )
}