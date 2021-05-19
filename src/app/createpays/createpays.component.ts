import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from '../Model/pays';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-createpays',
  templateUrl: './createpays.component.html',
  styleUrls: ['./createpays.component.css']
})
export class CreatepaysComponent implements OnInit {

  pays: Pays = new Pays();

  constructor(private paysService: PaysService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePays(){
    this.paysService.createPays(this.pays).subscribe( data =>{
      console.log(data);
      this.goToPaysList();
    },
    error => console.log(error));
  }

  goToPaysList(){
    this.router.navigate(['/pays']);
  }
  onSubmit(){
    console.log(this.pays);
   this.savePays();
  }
}
