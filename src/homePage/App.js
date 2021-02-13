import '../styles/App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel, Nav, Navbar} from 'react-bootstrap'
import imNew from './imNew';

class App extends Component {

  constructor(props ){
    super(props)

  }

  render() {
    return (
      <div >
        <Navbar expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">
                <img 
                    src="https://images.squarespace-cdn.com/content/54fe2f8be4b03e430c533f3e/1569874689450-RVE1PULINBGW2C2NDQUV/NC+Logo+2.png?content-type=image%2Fpng"
                    className="navBarImage"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>HOME</Nav.Link> 
                    <Nav.Link>I'M NEW</Nav.Link> 
                    <Nav.Link>GET INVOLVED</Nav.Link> 
                    <Nav.Link>EVENTS</Nav.Link> 
                    <Nav.Link>MEDIA</Nav.Link> 
                    <Nav.Link>RESOURCES</Nav.Link> 
                    <Nav.Link>GIVE</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        {/* MAIN CONTENT */}
        <Carousel>
            <Carousel.Item className="imageSlider">
              <img className="imageSlider" src="https://images.squarespace-cdn.com/content/v1/54fe2f8be4b03e430c533f3e/1612468393961-M26TJEAT2DV0SOTQ5UQJ/ke17ZwdGBToddI8pDm48kDVokaOSqzjr564J_0IGKAIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnE_WkJv_E1pcev7k1DvQ-Riby0y4nRo9EdhfaAgcDr1-UwT7OFThh-bE3L9Fnb9pBw/Sermon+on+the+Mount+Banner.jpg"/>
            </Carousel.Item>
          </Carousel>
        <div className="mainBody">
          <div className="leftContent">
              <h2 className = "header"> Welcome to Northland Cathedral </h2>
          </div>
          <div className="rightContent">
              <h2 className = "sideHeader"> Service Times:  </h2>
              
          </div>
        </div>
      </div>
    );
  }
}

export default App;
