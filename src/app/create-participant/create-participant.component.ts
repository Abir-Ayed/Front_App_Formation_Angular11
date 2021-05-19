import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Organisme } from '../Model/organisme';
import { Participant } from '../Model/participant';
import { Pays } from '../Model/pays';
import { Profile } from '../Model/profile';
import { Sessionformation } from '../Model/sessionformation';
import { OrganismeService } from '../services/organisme.service';
import { ParticipantService } from '../services/participant.service';
import { PaysService } from '../services/pays.service';
import { ProfileService } from '../services/profile.service';
import { SessionformationService } from '../services/sessionformation.service';

@Component({
  selector: 'app-create-participant',
  templateUrl: './create-participant.component.html',
  styleUrls: ['./create-participant.component.css']
})
export class CreateParticipantComponent implements OnInit {

  organismes: Organisme[];
   organisme: Organisme;
   participant: any={};
  submitted = false;
  profils: Profile[];
  profil : Profile;
  payss: Pays[];
  pays : Pays;
  sessions : Sessionformation[];
  session : Sessionformation;
  selectedItems!: string[];

  // tslint:disable-next-line:max-line-length
  constructor(private sessionservice: SessionformationService,private participantService: ParticipantService, private organismeService: OrganismeService, private profilService: ProfileService,
              private paysServiceService: PaysService, private router: Router , private route: ActivatedRoute) { }

              ngOnInit(): void {

                this.participant = new Participant();
                this.organismeService.getOrganismeList().subscribe(
                  data => {
                    console.log(data);
                    this.organismes = data;
                  },
                  error => console.log(error)
                );
            
            
                this.profilService.getProfileList().subscribe(
                  data => {
                    console.log(data);
                    this.profils = data;
                  },
                  error => console.log(error)
                );
            
                this.paysServiceService.getPaysList().subscribe(
                  data => {
                    console.log(data);
                    this.payss = data;
                  },
                  error => console.log(error)
                );
            
            
                this.sessionservice.getSessionformationList().subscribe(
                  data => {
                    console.log(data);
                    this.sessions = data;
                  },
                  error => console.log(error)
                );
            
                this.selectedItems = new Array<string>();
              }
            
              newParticipant(): void {
                this.submitted = false;
                this.participant = new Participant();
              }
/*  saveParticipant(){
    this.participantService.createParticipant(this.participant).subscribe( data => {
      console.log(data);
      this.goToParticipantList();
    },
    error => console.log(error));
  }*/
  saveParticipant(): void {
    this.participant.sessions = this.selectedItems;
    console.log( this.participant.sessions);
    this.participantService.createParticipant(this.participant).subscribe(data => {

        this.participant = new Participant();
        this.goToParticipantList();
      },
      error => console.log(error));


  }

  goToParticipantList(){
    this.router.navigate(['/Participants']);
  }
  selected(){

  }
  onSubmit(){
 console.log(this.participant);
   this.saveParticipant();
  }
  getSessionId(e:any,id:any) {

    if ( e.target.checked)
    {
      console.log(id +'checked');
      this.selectedItems.push(id);
    }
    else
    {
      console.log(id +'Unchecked');
    }

    console.log(this.selectedItems);


  }
}
