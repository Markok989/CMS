import React, { Component } from 'react';
//import { Carousel } from 'react-bootstrap';
//import ImageSlider from 'react-native-image-slider';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class Proba extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="photos/21761647_1997493967163610_930953544743379157_n.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="photos/21761647_1997493967163610_930953544743379157_n.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="photos/21761647_1997493967163610_930953544743379157_n.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default Proba;

