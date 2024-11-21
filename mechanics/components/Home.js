import slide01 from '../static/slide01.jpg'

import Carousel from 'react-bootstrap/Carousel';

const MechanicsHome = () => {
  return (
  <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide01}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default MechanicsHome;