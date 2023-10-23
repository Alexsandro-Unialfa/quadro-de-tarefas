import { ReactNode, createContext } from "react";

export const TarefaContext = createContext({})

interface PropsTarefaProvider {
    children: ReactNode
}

export function TarefasProvider({ children }: PropsTarefaProvider) {
    return(
        <TarefaContext.Provider value={{}}>
            {children}
        </TarefaContext.Provider>
    )


}


