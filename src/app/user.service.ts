import { AngularFireAuth } from '@angular/fire/auth';
import {Injectable} from '@angular/core';

interface user{
    kullanici:string,
    id:string
}

@Injectable()
export class UserService{
    private user:user

    constructor(
        private afAuth:AngularFireAuth
    ){

    }

    setUser(user:user){
        this.user=user
    }
   getUID(){

        return this.user.id
    }

    OturumKontrol() {
        if (localStorage.getItem("user")) {
          return true;
        } else {
          return false;
        }
    }
}