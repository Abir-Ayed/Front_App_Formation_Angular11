import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../Model/participant';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-listparticipant',
  templateUrl: './listparticipant.component.html',
  styleUrls: ['./listparticipant.component.css']
})
export class ListparticipantComponent implements OnInit {

  participants !: Participant[];
  constructor(private participantService: ParticipantService,
              private router: Router) { }

  ngOnInit(): void {
    this.getParticipants();

  }
  private getParticipants(){
    this.participantService.getParticipantList().subscribe(data => {
      this.participants = data;

    });


  }


  deleteParticipant(id: number) {
    if(confirm("Êtes-vous sûr de vouloir supprimer "+id)){
    this.participantService.deleteParticipant(id)
      .subscribe(
        data => {
          console.log(data);
          this.getParticipants();
        },
        error => console.log(error));
  }
}
  detailsParticipant(id: number){
    this.router.navigate(['detailsParticipant', id]);
  }
  // tslint:disable-next-line:typedef
  updateParticipant(id: number){
    this.router.navigate(['updateParticipant', id]);
  }


}
