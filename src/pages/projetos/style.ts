import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(0deg, #1b263b, #0d1b2a);
    height: 100vh;
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

export const ContainerProjects = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #25334A;
    margin: 20px;
    gap: 5vw;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 85%;
    max-width: 900px;
    min-width: 300px;
    
`

export const PaiProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const Projects = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const VideoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
`

export const VideoPlayer = styled.video`
    width: 60%;
    max-width: 600px;
    min-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`
export const TexteProject = styled.div`
    display: flex;
    text-align: justify;
    color: #e0e1dd;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    gap: 10px;
    
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: #e0e1dd;
`