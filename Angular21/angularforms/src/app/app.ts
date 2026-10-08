import { HttpClient } from '@angular/common/http';
import { Component, signal, computed, effect } from '@angular/core';
import { producerAccessed } from '@angular/core/primitives/signals';
import { RouterOutlet } from '@angular/router';

export interface Cart {
  discountedTotal : number
  id : number
  products : Product[]
  total : number
  totalProducts : number
  totalQuantity : number
  userId : number
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface CartResponse {
  carts: Cart[],
  limit: number,
  skip: number,
  total: number
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('angularforms');
  carts = signal<Cart[]>([]);

  maxPrice1 = signal<number>(1);

  constructor(private http: HttpClient) { 
    this.getData();
  //   effect(() => {
  //   console.log("Filtered Products:", this.filteredProducts());
  // });
  };


  maxPrice(event: Event){
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.maxPrice1.set(value || 1);
  }

  filteredProducts = computed(()=>{
    const price = this.maxPrice1();

    return this.carts().flatMap( cart => 
      cart.products.filter(product => product.price < price)
    )
  })

  

  
  

  getData() {
    this.http.get<CartResponse>("https://dummyjson.com/carts")
      .subscribe((data) => {
        // console.log(data.carts)

        this.carts.set(data?.carts)
      });
  }



}
