import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formateur } from '../Model/formateur';
import { Organisme } from '../Model/organisme';
import { FormateurService } from '../services/formateur.service';
import { OrganismeService } from '../services/organisme.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  id !: number;

  submitted=false;
  organismes !: Observable<Organisme[]>;
  formateur !: Formateur;
  organisme!: Organisme;

  constructor(private formateurService: FormateurService,private organismeService : OrganismeService ,   private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {


    this.organismes = this.organismeService.getOrganismeList();
    this.formateur = new Formateur();
    this.id = this.route.snapshot.params.id;

    this.formateurService.getFormateurById(this.id)
      .subscribe(data => {
        console.log(data);
        this.formateur = data;
      }, error => console.log(error));



  }

  updateFormateur() {
    this.formateurService.updateFormateur(this.id, this.formateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formateur = new Formateur();
    this.goToFormateurList();
  }

  onSubmit(){
    this.updateFormateur();
  }

  goToFormateurList(){
    this.router.navigate(['/formateurs']);
  }

}
