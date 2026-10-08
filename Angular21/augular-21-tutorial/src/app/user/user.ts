import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(private route:ActivatedRoute){};

  userName: string | null = "";

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      this.userName = params['name'];
    })
  }
}
