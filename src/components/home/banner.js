import React from 'react';
import { Carousel } from 'react-bootstrap';

class Banner extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={250} alt="900x250" src="course-banner1.png" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Text about course.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={250} alt="900x250" src="course-banner1.png" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Text about course.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={250} alt="900x250" src="course-banner1.png" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Text about course.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Banner;

