import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(0deg, #1b263b, #0d1b2a);
    min-height: 100vh;
    margin: 0;
    padding: 0;
`

export const Header = styled.div`
    background-color: #1b263b;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const LinkPageRoute = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

export const Perfil = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 30px;

    & img{
        max-width: 300px;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

export const Title = styled.h2`

    color: #e0e1dd;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
`

export const Name = styled.h3`
    color: #e0e1dd;
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
`

export const Biography = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: justify;
    margin-top: 20px;
    
`

export const TextBiography = styled.p`
    font-size: 16px;
    color: #e0e1dd;
    font-weight: 400;
    `

export const StyleBio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1B263B;
    margin: 30px 0;
    padding: 30px;
    max-width: 600px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`