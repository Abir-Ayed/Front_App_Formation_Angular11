import { Organisme } from "./organisme";

export class Formateur {
    id !: number;
    nom !: string;
    prenom !: string;
    email !: string;
    tel !: number;
    type !: string;
    organisme !: Organisme;
    constructor() {
      this.organisme = new Organisme();
}
}