import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(){console.log("product service")}
  getProductData(){
    return [
      {name: 'mobile', branch: 'samsung', price: '2000'},
      {name: 'laptop', branch: 'dell', price: '12000'},
      {name: 'washing machine', branch: 'samsung', price: '11000'},
    ]
  }
}
