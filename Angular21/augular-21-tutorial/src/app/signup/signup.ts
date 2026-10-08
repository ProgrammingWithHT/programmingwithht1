import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  @Input() flag!: string;
  @Output() notify = new EventEmitter<string>();

  sendData(){
    this.notify.emit("Hello Parent")
  }

}
