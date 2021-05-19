import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Organisme } from '../Model/organisme';
import { Sessionformation } from '../Model/sessionformation';
import { FormateurService } from '../services/formateur.service';
import { FormationService } from '../services/formation.service';
import { OrganismeService } from '../services/organisme.service';
import { SessionformationService } from '../services/sessionformation.service';

@Component({
  selector: 'app-session-formation',
  templateUrl: './session-formation.component.html',
  styleUrls: ['./session-formation.component.css']
})
export class SessionFormationComponent implements OnInit {
  
  sessionformations !: Observable<Sessionformation[]>;
  constructor(private formateurService: FormateurService, private organismeService: OrganismeService,
              private formationService: FormationService, private sessionformationService: SessionformationService,
              private router: Router) { }

  ngOnInit(): void {
    this.getsessionformations();

  }
  // tslint:disable-next-line:typedef
  getsessionformations(){
    this.sessionformations = this.sessionformationService.getSessionformationList();
  }


  // tslint:disable-next-line:typedef
  deletesessionformation(id: number) {
    this.sessionformationService.deleteSessionformation(id)
      .subscribe(
        data => {
          console.log(data);
          this.getsessionformations();
        },
        error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  sessionformationDetails(id: number){
    this.router.navigate(['sessionDetails', id]);
  }
  // tslint:disable-next-line:typedef
  updatesessionformation(id: number){
    this.router.navigate(['updatesessionFormation', id]);
  }

}
