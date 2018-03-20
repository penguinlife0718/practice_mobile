import styled, { keyframes } from 'styled-components';
import kajima from './assets/img/commnet_lecture2.png';

const floating = keyframes`
    0%
      {transform: translateY(0px);}
    50%
      {transform: translateY(-50px);}
    100%
      {transform: translateY(0px);}
`;

const Kajima = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px 0;
  background: url(${kajima});
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${floating} 1.5s ease-in-out infinite;
`
export default Kajima