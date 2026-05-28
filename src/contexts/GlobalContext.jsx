import { createContext, useState} from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// aqui cria as infos salvas no contexto
    const[usuario, setUsuario] = useState ("Alisson ferreira 10")
    const[jogadorDoDia, setJogadorDoDia] = useState ("Neymar")
    const[jogadores, setJogadores] = useState([
        {id:0, nome:"Neymar", imagem: neymar_4474803b (1) }
    ]);
    let anoDaCopa = 2026

    return(
        <GlobalContext.Provider value={{
                usuario, setUsuario, anoDaCopa,
                jogadorDoDia, setJogadorDoDia, jogadores,
             
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
