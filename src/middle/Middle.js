import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
//import Menu from '../components/Menu';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
export const Middle = () => {
  return (
    <div className="App">
   
    <Row className="landing">
      <Col ><LeftSide /></Col>
      
      <Col ><RightSide /></Col>
    </Row>
  </div>
  )
}
export default Middle
