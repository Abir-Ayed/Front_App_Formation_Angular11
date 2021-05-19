import { Sessionformation } from "./sessionformation";
import { Organisme } from "./organisme";
import { Pays } from "./pays";
import { Profile } from "./profile";

export class Participant {

   /* id	!:number;
    nom !:string;
    prenom !:string;
    type !:string;
    tel !:string;
    organisme !: Organisme;
    email !:number;
    pays !: Pays;
    profils !: Profile;
    sessions !:Sessionformation;

    session : Sessionformation[];*/
    id !: number;
    nom !:string;
    prenom !:string;
    type !:string;
    tel !:string;
    email !:string;
  
    organisme: Organisme;
    profils: Profile;
    pays: Pays;
    sessions: Sessionformation[];
}
