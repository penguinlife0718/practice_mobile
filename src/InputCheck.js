import styled from 'styled-components';

const InputCheck = styled.input`
  width: 200px;
  height: 50px;
  margin: 30px 0;
  font-size: 16px;
  text-align: center;
  color: gray;
  border-radius: 5px;
  border: 5px solid ${props => props.inputStyleBorderColor};
`
export default InputCheck;