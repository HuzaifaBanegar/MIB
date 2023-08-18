
import {UncontrolledExample} from "../Components/Carousal/Carousal"
import '../utils/index.css';
import Box from '@mui/material/Box';
import {ReactComponent as Insta} from '../utils/svgs/insta.svg'
import {ReactComponent as  Linkdin } from "../utils/svgs/linkedin.svg";
import {ReactComponent as Email} from '../utils/svgs/email.svg';
import {ReactComponent as Whatsapp} from '../utils/svgs/whatsapp.svg'
export const Home=()=>{
    return (
        <Box id="Home" className="bannerdiv" >
            <Box className='iconsdiv' >
                <Insta/>
                <Linkdin/>
                <Email/>
                <Whatsapp/>
            </Box>
            <Box marginX={'auto'} className='imagesDiv' >
                <UncontrolledExample/>  
            </Box>
        </Box>
        
    )
} 