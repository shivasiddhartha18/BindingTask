import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  user: string = "";
  
  constructor() {
   
   }
  onClick(){
   return this.user = "";
  }

}
