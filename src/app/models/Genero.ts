import { Filme } from "./Filme";

export interface Genero {
  id: number;
  nome: string;
  generosFilmes:Filme[];
}
