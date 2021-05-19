import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from '../Model/domaine';
import { DomaineService } from '../services/domaine.service';

@Component({
  selector: 'app-create-domaine',
  templateUrl: './create-domaine.component.html',
  styleUrls: ['./create-domaine.component.css']
})
export class CreateDomaineComponent implements OnInit {

  domaine: Domaine = new Domaine();

  constructor(private domaineService: DomaineService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveDomaine(){
    this.domaineService.createDomaine(this.domaine).subscribe( data =>{
        console.log(data);
        this.goToDomaineList();
      },
      error => console.log(error));
  }
  goToDomaineList(){
    this.router.navigate(['/domaines']);
  }
  onSubmit(){
    console.log(this.domaine);
    this.saveDomaine();
  }

}
