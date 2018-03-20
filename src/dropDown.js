import styled from 'styled-components';

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
export {DropDownButton , DropDownSection}
