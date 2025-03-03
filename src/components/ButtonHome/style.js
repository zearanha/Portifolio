import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 25%;
  background-color: #415a77;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & img{
    max-width: 40px;}

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.6;
  }
`;
