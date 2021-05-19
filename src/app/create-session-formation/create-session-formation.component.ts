import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../Model/formateur';
import { Formation } from '../Model/formation';
import { Organisme } from '../Model/organisme';
import { Sessionformation } from '../Model/sessionformation';
import { FormateurService } from '../services/formateur.service';
import { FormationService } from '../services/formation.service';
import { OrganismeService } from '../services/organisme.service';
import { SessionformationService } from '../services/sessionformation.service';

@Component({
  selector: 'app-create-session-formation',
  templateUrl: './create-session-formation.component.html',
  styleUrls: ['./create-session-formation.component.css']
})
export class CreateSessionFormationComponent implements OnInit {

  submitted = false;
  sesfor: Sessionformation = new Sessionformation();
  formateurs!: Formateur[];
  formations!: Formation[];
  organismes!: Organisme[];
  constructor(private formateurService: FormateurService, private organismeService: OrganismeService,
              private formationService: FormationService, private sessionformationService: SessionformationService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.formateurService.getFormateurList().subscribe(
      date => {
        console.log(date);
        this.formateurs = date;
      },
      error => console.log(error)
    );
    this.formationService.getFormationList().subscribe(
      date => {
        console.log(date);
        this.formations = date;
      },
      error => console.log(error)
    );
    this.organismeService.getOrganismeList().subscribe(
      date => {
        console.log(date);
        this.organismes = date;
      },
      error => console.log(error)
    );
  }
  save(): any {
    this.sessionformationService.createSessionformation(this.sesfor)
      .subscribe(data => console.log(data), error => console.log(error));
  }
  onSubmit(): any {
    this.submitted = true;
    this.save();
    this.router.navigate(['/sessionFormmations']);
  }
}
