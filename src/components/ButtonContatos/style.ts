import styled from "styled-components";

export const ButtonContact = styled.button`
    border: none;
    padding: 5px;
    border-radius: 8px;
    background-color: #778DA9;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #E0E1DD;
    font-size: 20px;
    padding: 5px 10px;

    :hover {
        opacity: 0.8;
    }    

    :active {        
        opacity: 0.6;
    }

    & a{
        text-decoration: none;
        color: #E0E1DD;
        font-size: 20px;
        font-weight: 600;
    }
`