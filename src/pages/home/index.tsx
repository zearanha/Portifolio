import {
  Biography,
  Container,
  Header,
  LinkPageRoute,
  Name,
  Perfil,
  StyleBio,
  TextBiography,
  Title,
} from "./style";
import Button from "../../components/ButtonHome";
import { LinkProject } from "../../components/Links/style";
import { useNavigate } from "react-router";
import perf from "../../assets/perfil.jpg";
import ButtonContatos from "../../components/ButtonContatos";

function Home() {
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

      <Perfil>
        <Title>Desenvolvedor Full Stack</Title>

        <img src={perf} alt="Perfil" />

        <Name>José de Arnanha Falcão Neto</Name>
      </Perfil>

      <Biography>
        <StyleBio>
          <TextBiography>
          Sou José de Aranha, 18 anos, em transição das artes marciais para a tecnologia, focado no desenvolvimento Full Stack. Estudo HTML, CSS, JavaScript, React, Node.js, Angular e Vue.js no Dev Club, além de Python, MySQL, Bootstrap e C na UNIFAN, aplicando projetos no GitHub. Tenho habilidades em colaboração, comunicação, resolução de problemas, flexibilidade e pontualidade. Busco minha primeira oportunidade como desenvolvedor júnior para aplicar meus conhecimentos e contribuir com projetos inovadores.
          </TextBiography>
        </StyleBio>
      </Biography>
    </Container>
  );
}

export default Home;
