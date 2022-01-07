import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  kullanici:string=""
  parola:string=""
  mail:string=""
  
  constructor(
    public afAuth:AngularFireAuth,
    public anStore:AngularFirestore,
    public service:UserService,
    public router:Router,
    ) { }

  ngOnInit() {
  }

  async signup(){
    const {kullanici,parola,mail}=this
    try{
      const sonuc=await this.afAuth.createUserWithEmailAndPassword(mail,parola,)
      
      //console.log(sonuc);
      if(sonuc.user){
        this.anStore.doc(`users/${sonuc.user.uid}`).set({
          username:mail
        })
        this.service.setUser({
          kullanici:mail,
          id:sonuc.user.uid
        })

        this.router.navigate(['/giris'])

    }


    }

  catch(err){
    console.dir(err)
     
  }

   
    
    }

  }
