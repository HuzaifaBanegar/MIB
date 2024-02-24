// import 'bootstrap/dist/css/bootstrap.min.css'
import './Carousal.css'
import Carousel from 'react-bootstrap/Carousel';
import { CAROUSAL1_url, CAROUSAL2_url, CAROUSAL3_url } from "../../utils/constant";
import { Box } from '@mui/material';


export function UncontrolledExample() {
    return (
      <Box sx={{width:'100%'}}>
        <Carousel>
          <Carousel.Item>
            <img id="banner_img"
              className="d-block w-100"
              src={CAROUSAL1_url}
              alt="First slide"
            />
            <Carousel.Caption>
            <h1 style={{textShadow:'2px 2px 5px black'}}>Design your space for living</h1>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id="banner_img"
              className="d-block w-100"
              src={CAROUSAL2_url}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h1 style={{textShadow:'2px 2px 5px black'}}>Get quotes on your bedroom design</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img id="banner_img"
              className="d-block w-100"
              src={CAROUSAL3_url}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h1 style={{textShadow:'2px 2px 5px black'}}>Design your beautiful garden</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Box>
    );
  }