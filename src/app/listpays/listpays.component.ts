import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from '../Model/pays';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-listpays',
  templateUrl: './listpays.component.html',
  styleUrls: ['./listpays.component.css']
})
export class ListpaysComponent implements OnInit {

  payss !: Pays[];
  constructor(private paysService: PaysService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPayss();

  }
  private getPayss(){
    this.paysService.getPaysList().subscribe(data => {
   this.payss = data;

    });
    

  }
 
 
  deletePays(id: number) {
    if(confirm("Êtes-vous sûr de vouloir supprimer "+id)){
    this.paysService.deletePays(id)
      .subscribe(
        data => {
          console.log(data);
          this.getPayss();
        },
        error => console.log(error));
  }
}

}
