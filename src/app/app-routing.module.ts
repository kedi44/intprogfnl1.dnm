import { PsComponent } from './ps/ps.component';
import { CevapComponent } from './cevap/cevap.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoruComponent } from './soru/soru.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'soru', component:SoruComponent },
  { path:'kayıt', component:RegisterComponent },
  { path:'giris', component:LoginComponent },
  { path:'cevap1', component:CevapComponent },
  { path:'ps', component:PsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
