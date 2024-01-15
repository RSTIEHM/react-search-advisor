/* eslint-disable react/prop-types */
import styled from "styled-components";


const FormError = styled.span`
    color: red;
    font-style: italic;
    font-size: 15px;
`;

const FormErrorMsg = ({text}) => {
  return (
    <FormError>{text}</FormError>
  )
}

export default FormErrorMsg