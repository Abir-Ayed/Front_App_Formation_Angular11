import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formateur } from '../Model/formateur';
import { Organisme } from '../Model/organisme';
import { FormateurService } from '../services/formateur.service';
import { OrganismeService } from '../services/organisme.service';

@Component({
  selector: 'app-listformateur',
  templateUrl: './listformateur.component.html',
  styleUrls: ['./listformateur.component.css']
})
export class ListformateurComponent implements OnInit {
  formateurs !: Observable<Formateur[]>;
  formateur!: Formateur;
  organisme!: Observable<Organisme[]>;
  libelle!: string;

  constructor(private formateurService: FormateurService, private organismeService: OrganismeService ,
              private router: Router) { }
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {


    this.formateurs = this.formateurService.getFormateurList();

  }

  deleteformateur(id: number) {
    if(confirm("Êtes-vous sûr de vouloir supprimer "+id)){
    this.formateurService.deleteFormateur(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  }


  Formateurdetails(id: number){
    this.router.navigate(['detailsstaff', id]);
  }
  updateFormateur(id: number){
    this.router.navigate(['updateFormateur', id]);
  }

}
