import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from '../Model/formation';
import { FormationService } from '../services/formation.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent implements OnInit {

  formations !: Observable<Formation[]>;
  constructor(private formationService: FormationService,
              private router: Router) { }

  ngOnInit(): void {
    this.getFormations();

  }
  // tslint:disable-next-line:typedef
  getFormations(){
    this.formations = this.formationService.getFormationList();

  }


  // tslint:disable-next-line:typedef
  deleteFormation(id: number) {
   // this.confirmBox();
    if(confirm("Êtes-vous sûr de vouloir supprimer "+id)){
      this.formationService.deleteFormation(id)
      .subscribe(
        data => {
          console.log(data);
          this.getFormations();
        
        },
        error => console.log(error));
    }
  
  }
  // tslint:disable-next-line:typedef
  formationDetails(id: number){
    this.router.navigate(['detailsFormation', id]);
  }
  // tslint:disable-next-line:typedef
  updateFormation(id: number){
    this.router.navigate(['updateFormation', id]);
  }
  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    });
  }
}
