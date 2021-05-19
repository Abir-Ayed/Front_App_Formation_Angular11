import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from '../Model/formation';
import { Sessionformation } from '../Model/sessionformation';
import { FormateurService } from '../services/formateur.service';
import { FormationService } from '../services/formation.service';
import { OrganismeService } from '../services/organisme.service';
import { SessionformationService } from '../services/sessionformation.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {

  id!: number;
  formation!: Formation;
  sessionformations !: Observable<Sessionformation[]>;
  constructor(private route: ActivatedRoute, private router: Router,
              private formationService: FormationService , private formateurService: FormateurService, private organismeService: OrganismeService,
               private sessionformationService: SessionformationService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getsessionformations();
    this.formation = new Formation();

    this.id = this.route.snapshot.params['id'];

    this.formationService.getFormationById(this.id)
      .subscribe(data => {
        console.log(data);
        this.formation = data;
      }, error => console.log(error));
  }
  getsessionformations(){
    this.sessionformations = this.sessionformationService.getSessionformationList();
  }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['Formations']);
  }
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
    this.router.navigate(['detailssessionFormation', id]);
  }
  // tslint:disable-next-line:typedef
  updatesessionformation(id: number){
    this.router.navigate(['updatesessionFormation', id]);
  }
  sessionDetails(id: number){
    this.router.navigate(['sessionDetails', id]);
  }

}
