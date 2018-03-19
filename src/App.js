import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

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
        <Input
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
      </BackGround>
    );
  }
}

export default App;

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  width: 100%;
  height: 1000px;
`

const Input = styled.input`
  width: 200px;
  height: 50px;
  margin: 30px 0;
  font-size: 16px;
  text-align: center;
  color: gray;
  border-radius: 5px;
  border: 5px solid ${props => props.inputStyleBorderColor};
`
const DropDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 200px;
  height: 45px;
  border: none;
  border-radius: 4;
  background-color: #7FDFD4;
  color: #fff;
  font-size: 24px;
`
const DropDownSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    /* height: 100px; */
    height: ${props => props.height}px;
    margin: 0 0 10px 0;
    overflow: hidden;
    border: 1px solid #ededed;
    transition: .5s ease-in-out;
    font-size: 16px;
    box-sizing: border-box;    
    p {
      display: flex;
      align-items: center;
      justify-content: center;    
      min-height: 40px;
      padding: 0;
      margin: 0;
      color: gray;
      border-bottom: 1px solid #7FDFD4;
      };
`