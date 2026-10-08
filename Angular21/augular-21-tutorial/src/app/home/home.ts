import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router){}

  // goToProfile(name: string){
  //   this.router.navigate(['profile'], {queryParams: {name: name}});
  // }

  users = [
    {id: '1', name: 'Hamza', age: 19, email: 'hamza@gmail.com'},
    {id: '2', name: 'Tahir', age: 22, email: 'tahir@gmail.com'},
    {id: '3', name: 'Ali', age: 23, email: 'ali@gmail.com'},
    {id: '4', name: 'Qasim', age: 24, email: 'qasim@gmail.com'},
  ]

}
