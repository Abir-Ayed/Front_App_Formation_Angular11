import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    constructor(private authService: AuthService, private router: Router,private toastr:ToastrService){ }
    submitted = false;
    errorMessage = '';
    isLoggedin = false;
    isLoginFailed = false;
    ngOnInit() {
        this.loginForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        });
    }

    showToastr(){
        this.toastr.success('vous etes connecté','success')
    }
    onSubmit(){
        this.submitted = true;
        this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
            data=>{
                this.isLoggedin = true
                this.router.navigate(['/home']);
            },
            error=>{
                console.log(error);
                this.errorMessage = error;
                this.isLoggedin = false;
                this.isLoginFailed = true;
            }
        );
    }
}
