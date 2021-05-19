import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../Model/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  profil: Profile = new Profile();

  constructor(private profilService: ProfileService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveProfil(){
    this.profilService.createProfile(this.profil).subscribe( data =>{
      console.log(data);
      this.goToProfileList();
    },
    error => console.log(error));
  }

  goToProfileList(){
    this.router.navigate(['/profiles']);
  }
  
  onSubmit(){
    console.log(this.profil);
    this.saveProfil();
  }
}
