import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organisme } from '../Model/organisme';
import { OrganismeService } from '../services/organisme.service';

@Component({
  selector: 'app-createorganisme',
  templateUrl: './createorganisme.component.html',
  styleUrls: ['./createorganisme.component.css']
})
export class CreateorganismeComponent implements OnInit {

  organisme: Organisme = new Organisme();

  constructor(private organismeService: OrganismeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveOrganisme(){
    this.organismeService.createOrganisme(this.organisme).subscribe( data => {
        console.log(data);
        this.goToOrganismeList();
      },
      error => console.log(error));
  }

  goToOrganismeList(){
    this.router.navigate(['/organismes']);
  }
  onSubmit(){
    console.log(this.organisme);
    this.saveOrganisme();
  }

}
