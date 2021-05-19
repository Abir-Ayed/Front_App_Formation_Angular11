import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from '../Model/participant';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-details-participant',
  templateUrl: './details-participant.component.html',
  styleUrls: ['./details-participant.component.css']
})
export class DetailsParticipantComponent implements OnInit {

  id!: number;
  participant!: Participant;

  constructor(private route: ActivatedRoute, private router: Router,
              private participantService: ParticipantService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.participant = new Participant();

    this.id = this.route.snapshot.params['id'];

    this.participantService.getParticipantById(this.id)
      .subscribe(data => {
        console.log(data);
        this.participant = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['Participants']);
  }
}
