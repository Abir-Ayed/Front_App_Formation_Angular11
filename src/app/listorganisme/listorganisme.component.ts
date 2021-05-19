import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organisme } from '../Model/organisme';
import { OrganismeService } from '../services/organisme.service';

@Component({
  selector: 'app-listorganisme',
  templateUrl: './listorganisme.component.html',
  styleUrls: ['./listorganisme.component.css']
})
export class ListorganismeComponent implements OnInit {

  organismes !: Organisme[];
  constructor(private organismeService: OrganismeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOrganismes();
  }
  private getOrganismes(){
    this.organismeService.getOrganismeList().subscribe(data => {
      this.organismes = data;

    });


  }


  deleteOrganisme(id: number) {
    if(confirm("Êtes-vous sûr de vouloir supprimer "+id)){
    this.organismeService.deleteOrganisme(id)
      .subscribe(
        data => {
          console.log(data);
          this.getOrganismes();
        },
        error => console.log(error));
  }

}
}
