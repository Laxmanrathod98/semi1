import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { QuepageComponent } from './quepage/quepage.component'
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component'

const routes: Routes = [
  {path:'', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgot', component:ForgotPasswordComponent},
  {path: 'quesdetail/:id',component:QuepageComponent},
  {path: 'questions',component:HomeComponent},
  {path: 'ask',component:AskComponent},
  {path:'resetpassword/:id/:token', component:ResetPasswordComponent},
  {path:'user',component:UserProfileComponent,
  children: [
    {
    path:  'editProfile',
    component: EditProfileComponent
    },
    {path:'updateProfile',component:UploadImageComponent}
  ]
},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
