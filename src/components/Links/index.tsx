import { LinkProject } from "./style"
import type { ReactNode } from "react"

interface LinksProps{
    children: ReactNode;
}

function Link({children}: LinksProps) {

    return(
        <LinkProject>{children}</LinkProject>
    )
}

export default Link