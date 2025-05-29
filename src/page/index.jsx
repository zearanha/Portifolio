import Perfil from "../assets/perfil.jpg";
import Cadastro from "../assets/cadastro_de_usuario.png";
import Money from "../assets/conversor_de_moedas.png";
import Login from "../assets/pagina_de_login_moderna.png";
import Tempo from "../assets/previsor_do_tempo.png";
import './style.css';


function Home() {
  
  function enviarWhatsapp(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome");
    const mensagem = document.querySelector("#mensagem");
    const telefone = '5575982489610';
  
    const texto = `Olá, me chamo ${nome.value}, ${mensagem.value}`;
    const msgFormatada = encodeURIComponent(texto);
  
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;
    
    
    if(nome.value === '' || mensagem.value === ''){
      alert('Por favor, preencha todos os campos.');
      return;
    }

    window.open(url, '_blank');
  }

  return (
    <div className="body">

      <div className="particulas"></div>

      
      <nav className="navegacao">
        <ul className="menu">
          <li>
            <a href="#inicio" className="menu-link">Inicio</a>
          </li>
          <li>
            <a href="#sobre" className="menu-link">Sobre</a>
          </li>
          <li>
            <a href="#projeto" className="menu-link">Projetos</a>
          </li>
          <li>
            <a href="#contatos" className="menu-link">Contatos</a>
          </li>
        </ul>
      </nav>

      <main id="inicio" className="cabecalho">
        
          <img src={Perfil} className="foto-perfil" />
          <h1>José de Aranha</h1>
          <p className="cabecalho-sub-titulo">Desenvolvedor FullStack</p>
        
      </main>

      <section id="sobre" className="sobre">
        <h2 className="sobre-titulo">Sobre Mim</h2>
        <div className="sobre-caixa">
          <p className="sobre-paragrafo">
            Sou um desenvolvedor FullStack com experiência em diversas
            tecnologias e uma paixão por criar soluções inovadoras utilizando as tecnologias HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, MySql, Postgres, Git e GitHub. Minha jornada na programação começou há um ano, quando descobri o poder da tecnologia para resolver problemas do mundo real. Desde então, tenho me dedicado a aprimorar minhas habilidades e expandir meu conhecimento em desenvolvimento web.
          </p>
        </div>
      </section>

      <section id="projeto" className="projetos">
        <h2 className="projetos-titulo">Meus Projetos</h2>
        <div className="projetos-caixa">
          <div className="projetos-cards">
            <img src={Cadastro} alt="Projeto 1" className="projetos-imagem" />
            <div className="caixa-texto-projetos">
              <h3 className="info-projetos">Cadastro de Usuário</h3>
              <p className="paragrafo-projetos">
                Cadastro de Usuário, salvando eles em um banco de dados.
              </p>
            </div>
          </div>

          <div className="projetos-cards">
            <img src={Money} alt="Projeto 1" className="projetos-imagem" />
            <div className="caixa-texto-projetos">
              <h3 className="info-projetos">Conversor de Moedas</h3>
              <p className="paragrafo-projetos">
                Sistema de conversão de moedas em tempo real.
              </p>
            </div>
          </div>

          <div className="projetos-cards">
            <img src={Login} alt="Projeto 1" className="projetos-imagem" />
            <div className="caixa-texto-projetos">
              <h3 className="info-projetos">Pagina de login moderno</h3>
              <p className="paragrafo-projetos">
                Pagina de Login moderno, para login e criar Usuario
              </p>
            </div>
          </div>

          <div className="projetos-cards">
            <img src={Tempo} alt="Projeto 1" className="projetos-imagem" />
            <div className="caixa-texto-projetos">
              <h3 className="info-projetos">Previsão de tempo</h3>
              <p className="paragrafo-projetos">
                Aplicativo para previsão do tempo em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contatos" className="contatos">
        <h2 className="contatos-titulo">Entre em Contato</h2>
        <form className="formulario-contato" id="formulario" onSubmit={enviarWhatsapp}>
          <div className="grupo-form">
            <input placeholder="Nome" className="campo-form" id="nome"/>
          </div>
          <div className="grupo-form">
            <textarea className="campo-form" placeholder="Digite sua Mensagem" id="mensagem" rows={4}></textarea>
          </div>
          <button type="submit" className="botao-form">Enviar Mensagem</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
