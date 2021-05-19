import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sessionformation } from '../Model/sessionformation';
import { SessionformationService } from '../services/sessionformation.service';

@Component({
  selector: 'app-details-session-formation',
  templateUrl: './details-session-formation.component.html',
  styleUrls: ['./details-session-formation.component.css']
})
export class DetailsSessionFormationComponent implements OnInit {

  id!: number;
  sessionformation!: Sessionformation;

  constructor(private route: ActivatedRoute, private router: Router,
              private service: SessionformationService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.sessionformation = new Sessionformation();

    this.id = this.route.snapshot.params['id'];

    this.service.getSessionById(this.id)
      .subscribe(data => {
        console.log(data);
        this.sessionformation = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['sessionFormmations']);
  }

}
