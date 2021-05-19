import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;
  constructor(private authService: AuthService){}
  //isLoggedIn = false;
  user: string = '';
  ngOnInit(): void {
    //this.isLoggedIn = this.authService.isLoggedIn();
 //   this.isLoggedIn = !!this.authService.isLoggedIn();

      this.user = sessionStorage.getItem("roles");
      this.userName = sessionStorage.getItem("username");
 
     this.showAdminBoard = this.user.includes('ROLE_ADMIN');
      this.showUserBoard = this.user.includes('ROLE_USER');

  
  }
  getUserName(){
     return sessionStorage.getItem("username");
  }
  getUserRole(){
    return sessionStorage.getItem("roles");
 }
  onLogOut(){
    this.authService.logout();
  }

  loggedIn(){
    return this.authService.isLoggedIn()
  }

}
