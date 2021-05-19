import { Formateur } from "./formateur";
import { Formation } from "./formation";
import { Organisme } from "./organisme";

export class Sessionformation {
    id !: number;
    nom !: string;
    lieu!: string;
    organisme !: Organisme;
    date_debut!: Date;
    date_fin !: Date;
    formation !: Formation;
    formateur !: Formateur;
    nb_participant !: number;
    constructor() {
      this.organisme = new Organisme();
      this.formation = new Formation();
      this.formateur = new Formateur();
    }
}
