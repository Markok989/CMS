import React from 'react';
import {Link} from 'react-router';
import {Carousel} from 'react-bootstrap';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={229} alt="900x229" src="../../styles/photos/course-banner1.png"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={229} alt="900x229" src="../../styles/photos/course-banner1.png"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={229} alt="900x229" src="../../styles/photos/course-banner1.png"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="jumbotron">
          <h1>Courses</h1>
          <p>This for Courses about WebSites</p>
          <Link to="courses" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
