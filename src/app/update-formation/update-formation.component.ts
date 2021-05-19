import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Domaine } from '../Model/domaine';
import { Formation } from '../Model/formation';
import { DomaineService } from '../services/domaine.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {

  id !: number;

  submitted = false;
  liste !: Domaine[];
  formation !: Formation;
  domaine!: Domaine;
  domaine_id!: number ;
  // libelle !:string ;
  constructor(private formationService: FormationService, private domaineService: DomaineService ,   private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {


    this.domaineService.getDomaineList().subscribe(data => {
      this.liste = data; });
    this.formation = new Formation();
    this.domaine = new Domaine();
    this.id = this.route.snapshot.params.id;

    this.formationService.getFormationById(this.id)
      .subscribe(data => {
        console.log(data);
        this.formation = data;
      }, error => console.log(error));



  }

  updateFormation() {
   // this.formation.domaine = {id: this.domaine_id};
    this.formationService.updateFormation(this.id, this.formation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formation = new Formation();
    this.goToFormationList();
    //  window.location.reload();
  }

  onSubmit(){
    this.updateFormation();
  }
  selected(){
    console.log(this.domaine_id);
  }
  goToFormationList(){
    this.router.navigate(['/Formations']);
  }

}
