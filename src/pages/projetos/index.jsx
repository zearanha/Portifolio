import {
  Container,
  ContainerProjects,
  Header,
  LinkPageRoute,
  PaiProjectsContainer,
  Projects,
  TexteProject,
  Title,
  VideoContainer,
  VideoPlayer,
} from "./style";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ButtonHome";
import ButtonContatos from "../../components/ButtonContatos";
import { LinkProject } from "../../components/Links/style";
import CrudUsers from "../../assets/cadastro_usuario.mp4";

function Projetos() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Button></Button>
        <LinkPageRoute>
          <LinkProject onClick={() => navigate("/projects")}>
            Projetos
          </LinkProject>

          <LinkProject onClick={() => navigate("/Tecnologias")}>
            Tecnologias
          </LinkProject>
        </LinkPageRoute>
        <div>
          <ButtonContatos>Contato</ButtonContatos>
        </div>
      </Header>

      <PaiProjectsContainer>
        <Title>
          <h1>Projetos</h1>
        </Title>
        <ContainerProjects>
          <VideoContainer>
            <VideoPlayer controls>
              <source src={CrudUsers} type="video/mp4" />
            </VideoPlayer>
          </VideoContainer>
          <TexteProject>
            <h2>Crud</h2>
            <p>Este é um projeto Full Stack, onde foi desenvolvido com React e Node.js, envolve em CRUD com base em um cadastro de Usuário</p>
          </TexteProject>
        </ContainerProjects>
        <ContainerProjects>
          <VideoContainer>
            <VideoPlayer controls>
              <source src={CrudUsers} type="video/mp4" />
            </VideoPlayer>
          </VideoContainer>
          <TexteProject>
            <h2>Crud</h2>
            <p>Este é um projeto Full Stack, onde foi desenvolvido com React e Node.js, envolve em CRUD com base em um cadastro de Usuário</p>
          </TexteProject>
        </ContainerProjects>
      </PaiProjectsContainer>
    </Container>
  );
}

export default Projetos;
