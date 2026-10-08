import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle {
  @Input() counter = 0;
  name= "Hamza";
  constructor(){
    console.log("Constructor");
    this.name = "tahir";
  }

  ngOnInit(){
    console.log("ngOnInit")
    this.name = "Qasim"
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
  }

  ngOnChanges(){
    console.log("ngOnChange")
  }
}
