import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Organisme } from '../Model/organisme';
import { Participant } from '../Model/participant';
import { Pays } from '../Model/pays';
import { Profile } from '../Model/profile';
import { OrganismeService } from '../services/organisme.service';
import { ParticipantService } from '../services/participant.service';
import { PaysService } from '../services/pays.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {

  id !: number;
  payss !: Observable<Pays[]>;
  organismes !: Observable<Organisme[]>;
  profils !: Observable<Profile[]>;
  participant !: Participant;
  constructor(private participantService: ParticipantService, private organismeService: OrganismeService, private profilService: ProfileService,
              private paysServiceService: PaysService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.organismes = this.organismeService.getOrganismeList();
    this.profils = this.profilService.getProfileList();
    this.payss = this.paysServiceService.getPaysList();
    this.participant = new Participant();
    this.id = this.route.snapshot.params.id;
    this.participantService.getParticipantById(this.id)
      .subscribe(data => {
        console.log(data);
        this.participant = data;
      }, error => console.log(error));

  }
  updateParticipant() {
    // this.formation.domaine = {id: this.domaine_id};
    this.participantService.updateParticipant(this.id, this.participant)
      .subscribe(data => console.log(data), error => console.log(error));
    this.participant = new Participant();
    this.goToParticipantList();
    //  window.location.reload();
  }
  goToParticipantList(){
    this.router.navigate(['/Participants']);
  }
  onSubmit(){
    this.updateParticipant();
  }
}
