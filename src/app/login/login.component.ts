import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  kullanici:string=''
  parola:string=''
  constructor(public afAuth:AngularFireAuth,
    public router:Router,
    public anStore:AngularFirestore,
    public service:UserService) { }

  ngOnInit() {
    
  }

  async login(){
    const {kullanici,parola}=this
    try{
      const sonuc=await this.afAuth.signInWithEmailAndPassword(kullanici,parola)
      //console.log(sonuc)


      if(sonuc.user){
        this.service.setUser({
          kullanici,
          id:sonuc.user.uid
        })
      }  
      this.router.navigate(['/soru'])
    }

    catch(err){
      //console.dir(err)
      if(err.code="auth/user-not-found"){
        console.log("Kullanıcı Bulunamadı")
      }

    }
  }

}
