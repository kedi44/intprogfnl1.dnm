import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase';
@Component({
  selector: 'app-soru',
  templateUrl: './soru.component.html',
  styleUrls: ['./soru.component.css']
})
export class SoruComponent implements OnInit {

  soru:string
  cevap:string

  constructor(
    public afStore:AngularFirestore,
    public service:UserService,


  ){

   }

  todos = [
    
  ]

  ngOnInit() {
    
    }

    
    soruEkle(){
      const soru=this.soru

      this.afStore.doc(`posts/${this.service.getUID}`).update({
        sorular:firestore.FieldValue.arrayUnion({
          soru
        })
      })



  }
  

  AddTodo(todoText: HTMLInputElement){

    const text = {
      text: todoText.value,

    };
    this.todos.push(text)
  }

  cevapEkle(){
    const cevap=this.cevap

    this.afStore.doc(`posts/${this.service.getUID}`).update({
      sorular:firestore.FieldValue.arrayUnion({
        cevap
      })
    })


  }
}
