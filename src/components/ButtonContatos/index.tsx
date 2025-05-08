import { ButtonContact } from "./style";
import type { ReactNode } from "react";

interface ButtonContatosProps{
  children: ReactNode;
}

function ButtonContatos({ children }: ButtonContatosProps) {

  return (
    <ButtonContact>
      <a href="https://wa.me/557582489610" target="_blank">{children}</a>
    </ButtonContact>
  );
}

export default ButtonContatos;
