import { Component, Input, OnChanges, SimpleChanges, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnChanges {

  @Input() gender!: string;

  @Input() count!: number;
  @Input() childCount!: WritableSignal<number>

 

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges trighhered!");

    // console.log("Previous Value: ", changes['count'].previousValue);
    // console.log("Current Value: ", changes['count'].currentValue);

  }
  

}
