import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../Model/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  
  id !: number;
  profil: Profile = new Profile();
  constructor(private profilService: ProfileService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.profilService. getProfileById(this.id).subscribe(data => {
      this.profil = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.profilService.updateProfile(this.id, this.profil).subscribe( data =>{
      this.goToProfileList();
    }
    , error => console.log(error));
  }

  goToProfileList(){
    this.router.navigate(['/profiles']);
  }

}
