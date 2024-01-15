import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: 35px;
  height:25px;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
