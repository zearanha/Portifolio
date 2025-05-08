import { Button } from "./style"
import Home from "../../assets/home.png"
import { useNavigate } from "react-router-dom"
import type { ReactNode } from "react";

interface ButtonHomeProps{
  children?: ReactNode;
}

function HomeButton(props: ButtonHomeProps){
    const { children } = props;
    const navigate = useNavigate()
    return(
        <Button onClick={() => navigate('/')}> {children}<img src={Home} alt="" /></Button>
    )
}

export default HomeButton