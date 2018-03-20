import styled, { keyframes } from 'styled-components';
import cat from './assets/img/cat.png';

const circle = keyframes`
    from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
`;

const Cat = styled.div`
  width: 200px;
  height: 300px;
  margin: 30px 0;
  background: url(${cat});
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${circle} 2s linear infinite;
`
export default Cat