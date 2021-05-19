import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../Model/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {

  profiles !: Profile[];
  constructor(private profileService: ProfileService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  private getProfiles(){
    this.profileService.getProfileList().subscribe(data => {
      this.profiles = data;
    });
  }
  
  updateProfile(id: number){
    this.router.navigate(['update-profil', id]);
  }
 /* deleteProfil(id: number){
    this.profileService.deleteProfile(id).subscribe( data => {
      console.log(data);
      this.getProfiles();
    })*/
    deleteProfil(id: number) {
      if(confirm("Êtes-vous sûr de vouloir supprimer "+id)){
      this.profileService.deleteProfile(id)
        .subscribe(
          data => {
            console.log(data);
            this.getProfiles();
          },
          error => console.log(error));
    }
  }
}
