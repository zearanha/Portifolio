import { Container, Header, LinkPageRoute } from './style'
import { useNavigate } from 'react-router-dom'
import Button from "../../components/ButtonHome"
import { LinkProject } from '../../components/Links/style'


function Projetos (){
    
    const navigate = useNavigate()

    return(
       
        <Container>
           <Header>
        <Button></Button>
        <LinkPageRoute>
  
          <LinkProject onClick={() => navigate('/projects')}>Projetos</LinkProject>
  
          <LinkProject onClick={() => navigate('/Tecnologias')}>Tecnologias</LinkProject>
        </LinkPageRoute>
        <div>
          <button>Contato</button>
        </div>
        
      </Header>
        </Container>
        
    )
}

export default Projetos