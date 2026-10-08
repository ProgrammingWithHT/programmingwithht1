import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  //Learned three way to pass data between route
  //Route Parameters (Dynamic URL)
  //Query Parameters
  //Static Route Data - Data defined in route configuration (useful for guards, titles, etc.)

  userName: string | null = "";
  constructor(private route: ActivatedRoute){}
  ngOnInit(){

    // 1. Route Parameters (Dynamic URL)
    // let name = this.route.snapshot.paramMap.get('name');
    // this.userName = name;

    // 2. Query Parameters
    // this.route.queryParams.subscribe(paramms =>{
    //   console.log(paramms)
    // })

    //3. Static Route Data
    this.route.data.subscribe(data=>{
      console.log(data);
    })
  }
}
