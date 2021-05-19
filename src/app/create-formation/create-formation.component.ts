import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from '../Model/domaine';
import { Formation } from '../Model/formation';
import { DomaineService } from '../services/domaine.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {

  formation: Formation = new Formation();
  liste !: Domaine[];
  formations !:any[]

  domaine_id: any;
  submitted = false;

  constructor(private formationService: FormationService, private domaineService: DomaineService,
              private router: Router) { }

  ngOnInit(): void {
    this.getDomaines();
  }
  // tslint:disable-next-line:typedef
  private getDomaines(){
    this.domaineService.getDomaineList().subscribe(data => {
      this.liste = data;

    });
  }

  save() {
   // this.formation.domaine={id:this.id_domaine}
    console.log(this.domaine_id);
    this.formationService.createFormation(this.formation)
      .subscribe(data => console.log(data), error => console.log(error));

  }


  onSubmit() {
    this.submitted = true;
    this.save();

    this.goToFormationList();
    }



  selected(){
    console.log(this.domaine_id)
  }
  // tslint:disable-next-line:typedef
  goToFormationList(){
    this.router.navigate(['/Formations']);
  }
  // tslint:disable-next-line:typedef


}
