import { ButtonContact } from "./style";

function ButtonContatos({ children }) {

  return (
    <ButtonContact>
      <a href="https://wa.me/557582489610" target="_blank">{children}</a>
    </ButtonContact>
  );
}

export default ButtonContatos;
