import slide01 from '../static/slide01.jpg'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => (
  <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-200"
          src={slide01}
          alt="First slide"
          style={{
            objectFit: 'cover',
            width: '110%',
            height: '87vh',
          }}
          
          />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Home;