import { Genero } from "./Genero";

export interface Filme {
    id: number;
    titulo: string;
    dataLancamento?: Date;
    generoFilme: string;
    diretor:string;
    listaAtores:string;
    generosFilmes: Genero[];
}
