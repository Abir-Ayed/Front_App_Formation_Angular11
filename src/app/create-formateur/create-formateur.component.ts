import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formateur } from '../Model/formateur';
import { Organisme } from '../Model/organisme';
import { FormateurService } from '../services/formateur.service';
import { OrganismeService } from '../services/organisme.service';

@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.css']
})
export class CreateFormateurComponent implements OnInit {

   // formateurs !: Observable<Formateur[]>
   submitted = false;
   formateur: Formateur = new Formateur();
   organisme !: Observable<Organisme[]>;
 
   organisme_id: any;
   constructor(private formateurService: FormateurService, private organismeService: OrganismeService,
               private router: Router, private route: ActivatedRoute) { }
   /* newFormateur():void{
      this.submitted=false;
      this.formateur=new Formateur();
      this.formateur.organisme=new Organisme();
    }*/
 
   ngOnInit(): void {
     this.reloadData();
 
 
 
 
   }
 
   // tslint:disable-next-line:typedef
   reloadData() {
     this.organisme = this.organismeService.getOrganismeList();
   }
 
   saveFormateur() {
     this.formateurService.createFormateur(this.formateur)
       .subscribe(data => console.log(data), error => console.log(error));
     console.log(this.organisme_id);
     this.gotoList();
     // window.location.reload();
   }
 
   onSubmit() {
     this.submitted = true;
     this.saveFormateur();
     this.router.navigate(['/formateurs']);
 
   }
   // tslint:disable-next-line:typedef
   selected(){
     console.log(this.organisme_id);
   }
   // tslint:disable-next-line:typedef
   gotoList() {
     this.router.navigate(['/formateurs']);
   }
 

}
