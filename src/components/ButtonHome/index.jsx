import { Button } from "./style"
import Home from "../../assets/home.png"
import { useNavigate } from "react-router-dom"

function HomeButton({children}){
    const navigate = useNavigate()
    return(
        <Button onClick={() => navigate('/')}> {children}<img src={Home} alt="" /></Button>
    )
}

export default HomeButton