import { Domaine } from "./domaine";

export class Formation {
    id !: number;
    titre !: string;
    annee !: number;
    type_formation !: string;
    nb_session !: number;
    duree !: number;
    budget !: number;
    domaine !: Domaine ;
    constructor(){
      this.domaine = new Domaine();
  
  
    }
  
}

