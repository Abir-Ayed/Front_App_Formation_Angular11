import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from '../Model/domaine';
import { DomaineService } from '../services/domaine.service';

@Component({
  selector: 'app-list-domaine',
  templateUrl: './list-domaine.component.html',
  styleUrls: ['./list-domaine.component.css']
})
export class ListDomaineComponent implements OnInit {


  domaines !: Domaine[];
  constructor(private domaineService: DomaineService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.getDomaines();

    

}
private getDomaines(){
  this.domaineService.getDomaineList().subscribe(data => {
    this.domaines = data;

  });


}


deleteDomaine(id: number) {
  if(confirm("Êtes-vous sûr de vouloir supprimer "+id)){
  this.domaineService.deleteDomaine(id)
    .subscribe(
      data => {
        console.log(data);
        this.getDomaines();
      },
      error => console.log(error));
}
}
}
