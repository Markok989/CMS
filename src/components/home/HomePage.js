import React from 'react';
import Banner from './banner';
import Proba from './test';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
      {/*
        <div width={900} height={300}>
          <Banner/>
          <br/>
          <Proba/>
        </div>
      */}
        <div className="jumbotron">
          <h1>Courses</h1>
          <p>This for Courses about WebSites</p>
          <Link to="courses" className="btn btn-primary btn-lg">Courses</Link>
          <br/>
          <br/>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
