import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AllUsersComponent } from './users/allusers.component';
import { AuthInterceptor } from './services/authintercptor.service';
import { MenuComponent } from './menu/menu.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { CreatepaysComponent } from './createpays/createpays.component';
import { UpdatepaysComponent } from './updatepays/updatepays.component';
import { ListpaysComponent } from './listpays/listpays.component';
import { CreateorganismeComponent } from './createorganisme/createorganisme.component';
import { UpdateorganismeComponent } from './updateorganisme/updateorganisme.component';
import { ListorganismeComponent } from './listorganisme/listorganisme.component';
import { CreateDomaineComponent } from './create-domaine/create-domaine.component';
import { UpdateDomaineComponent } from './update-domaine/update-domaine.component';
import { ListDomaineComponent } from './list-domaine/list-domaine.component';
import { CreateFormateurComponent } from './create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { ListformateurComponent } from './listformateur/listformateur.component';
import { CreateParticipantComponent } from './create-participant/create-participant.component';
import { ListparticipantComponent } from './listparticipant/listparticipant.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';
import { DetailsParticipantComponent } from './details-participant/details-participant.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SessionFormationComponent } from './session-formation/session-formation.component';
import { CreateSessionFormationComponent } from './create-session-formation/create-session-formation.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { UpdateSessionFormationComponent } from './update-session-formation/update-session-formation.component';
import { DetailsSessionFormationComponent } from './details-session-formation/details-session-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent, 
    AllUsersComponent, MenuComponent, CreateProfileComponent, UpdateProfileComponent, ListProfileComponent, CreatepaysComponent, UpdatepaysComponent, ListpaysComponent, CreateorganismeComponent, UpdateorganismeComponent, ListorganismeComponent, CreateDomaineComponent, UpdateDomaineComponent, ListDomaineComponent, CreateFormateurComponent, UpdateFormateurComponent, ListformateurComponent, CreateParticipantComponent, ListparticipantComponent, UpdateParticipantComponent, DetailsParticipantComponent, CreateFormationComponent, UpdateFormationComponent, ListFormationComponent, SessionFormationComponent, CreateSessionFormationComponent, DetailFormationComponent, UpdateSessionFormationComponent, DetailsSessionFormationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar:true,
      progressAnimation: 'increasing',
      preventDuplicates:true

    })

    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
