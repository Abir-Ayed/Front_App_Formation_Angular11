import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AllUsersComponent } from './users/allusers.component';
import { UserContent } from './users/usercontent.component';
import { AdminContent } from './users/admincontent.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ListProfileComponent } from './list-profile/list-profile.component';
import { ListpaysComponent } from './listpays/listpays.component';
import { CreatepaysComponent } from './createpays/createpays.component';
import { ListDomaineComponent } from './list-domaine/list-domaine.component';
import { CreateDomaineComponent } from './create-domaine/create-domaine.component';
import { ListorganismeComponent } from './listorganisme/listorganisme.component';
import { CreateorganismeComponent } from './createorganisme/createorganisme.component';
import { ListformateurComponent } from './listformateur/listformateur.component';
import { CreateFormateurComponent } from './create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { ListparticipantComponent } from './listparticipant/listparticipant.component';
import { CreateParticipantComponent } from './create-participant/create-participant.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { DetailsParticipantComponent } from './details-participant/details-participant.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { CreateSessionFormationComponent } from './create-session-formation/create-session-formation.component';
import { SessionFormationComponent } from './session-formation/session-formation.component';
import { UpdateSessionFormationComponent } from './update-session-formation/update-session-formation.component';
import { DetailsSessionFormationComponent } from './details-session-formation/details-session-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';

const routes: Routes = [
    {path: 'signup', component: RegisterComponent}, 
    {path: 'login', component: LoginComponent}, 
    {path: 'home', component: HomeComponent},
    {path: 'allusers', component: AllUsersComponent},
    {path: 'usercontent', component: UserContent},
    {path: 'admincontent', component: AdminContent},
    
    
    {path: 'Participants',component:ListparticipantComponent},
    {path: 'addParticipant',component:CreateParticipantComponent},
    {path: 'updateParticipant/:id', component : UpdateParticipantComponent},
    {path: 'detailsParticipant/:id', component : DetailsParticipantComponent},

      {path: 'domaines',component:  ListDomaineComponent},
     {path: 'adddomaine',component:  CreateDomaineComponent},
  
       {path: 'profiles',component:ListProfileComponent},
       {path: 'addprofil',component:  CreateProfileComponent},
       {path: 'update-profil/:id', component: UpdateProfileComponent},
     
       {path: 'pays',component:ListpaysComponent},
       {path: 'addPays',component:CreatepaysComponent},
       {path: 'organismes',component:  ListorganismeComponent},
       {path: 'addorganisme',component:  CreateorganismeComponent},
  
        {path: 'formateurs',component:  ListformateurComponent},
        {path: 'addformateur',component:  CreateFormateurComponent},
        {path: 'updateFormateur/:id', component: UpdateFormateurComponent},

        {path: 'Formations', component : ListFormationComponent},
       {path: 'addFormation', component : CreateFormationComponent},
      {path: 'detailsFormation/:id', component :DetailFormationComponent},
      {path: 'updateFormation/:id', component : UpdateFormationComponent},
      {path: 'addSessionFormation', component : CreateSessionFormationComponent},
      {path: 'sessionFormmations', component : SessionFormationComponent},
      {path: 'updatesessionFormation/:id', component : UpdateSessionFormationComponent},
      {path: 'sessionDetails/:id', component : DetailsSessionFormationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule], 
})
export class AppRoutingModule { }
