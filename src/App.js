import React, { Component } from 'react';
import './App.css'
import styled from 'styled-components';
import { DropDownButton, DropDownSection } from './dropDown';
import InputCheck from './InputCheck';
// import {Column,Row} from './Rwd';
import Kajima from './Kajima'
import Cat from './Cat'

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  state = {
    inputStyleBorderColor: '#FFC7C7',
    dropDownHeight: 0
  }
  
  onChange = (e) => {
    const length = e.target.value.length;
    if (length >= 4) {
      this.setState(() => ({ inputStyleBorderColor: '#75c1c1' }))
    } else if (!this.state.disabled) {  
      this.setState(() => ({ inputStyleBorderColor: '#FFC7C7' }))
    }
  }
  animate = () => {
    this.setState(() => ({ dropDownHeight: this.state.dropDownHeight === 240 ? 0 : 240 }))
  }
  render() {
    return (
      <BackGround>
        <InputCheck
          inputStyleBorderColor={this.state.inputStyleBorderColor}
          onChange={this.onChange}
          placeholder="請輸入房號"
        />
        <DropDownButton onClick={this.animate}>DropDown</DropDownButton>
        <DropDownSection height={this.state.dropDownHeight}>
              <p>Selection 1</p>
              <p>Selection 2</p>
              <p>Selection 3</p>
              <p>Selection 4</p>
              <p>Selection 5</p>
              <p>Selection 6</p>
        </DropDownSection>
        <Kajima></Kajima>
        <Cat></Cat>
        <Container>
          <Row noGutters>
            <Col xs={{size:11,offset:1}} md={{size:3,offset:1}}><Test/></Col>
            <Col xs="12" md="4"><Test/></Col>
            <Col xs="11" md="3"><Test/></Col>
          </Row>
        </Container>
      </BackGround>
    );
  }
}

export default App;

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 1000px;
`

const Test = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0,0,0,0.4);
`

