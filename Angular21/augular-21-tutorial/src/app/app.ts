import { Component, signal,computed, effect, input, ViewChild, afterNextRender } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgIf, NgSwitch } from '@angular/common';
import { Twowaybinding } from "./twowaybinding/twowaybinding";
import { Header } from './header/header';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, NgForm } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';
import { Lifecycle } from './lifecycle/lifecycle';
import { Product } from './services/product';


//You can generate component with ng generate component Login shortcut ng g c Login
//generate pipes: ng generage pipe  UIPiples
//ng server -- open  //help to run project and open browser auto
//app.spec.ts this file for testing purpose when you see 'spec' in any file it means testing
// 🚀 Final Summary
// 🔹 name!: string;
// string → Type
// ! → "Will be assigned later by Angular"
// 🔹 [name]="'Hamza'"
// [] → Property binding (JS expression)
// Without [] → Just static string

@Component({
  selector: 'app-root',
  imports: [Login, Signup, CommonModule, Twowaybinding, RouterLink, RouterOutlet,Header, ReactiveFormsModule,FormsModule, CurrencyConvertorPipe,Lifecycle],
  templateUrl: './app.html', //if not used separate file then you also used direct html like template: `<h1>inline template</h1>`;
  //template: '<h1>Inline Template {{name}}</h1>',
  styleUrl: './app.css',
  // styleUrl: ['./app.css', './style.css'],    //by this you can used multiple css files
  // styles: ['h1{background-color: red; border: 1px solid;}']
})

export class App {
  protected readonly title = signal('augular-21-tutorial');
  name = "Hamza Tahir"
  age = 24;

  display: boolean = true;
  color: string = 'red';
  arrData: string[] = ["hamza", "Qasim", "tahir"];
  
  count:number = 0;
  getChildData:string = "";

  
  //lifecycle method
  @ViewChild('lifecycle') Lifecycle:any

  // constructor(){
  //   afterNextRender(()=>{
  //     console.log("afterRender",this.Lifecycle.counter)
  //   })
  // }

  counter = 1;
  updateCounter(){
    this.counter++;
  }

  //Form in angular
  // name2 = new FormControl('Hamza'); give default value to input tag
  // name2 = new FormControl();
  // pass = new FormControl();
  // displayValue(){
  //   console.log(this.name2.value, this.pass.value);
  // }

  // reactive Form Grouping
  // profileForm = new FormGroup({
  //   name2: new FormControl('', [Validators.required]),
  //   password: new FormControl('',[Validators.minLength(5), Validators.required]),
  //   email: new FormControl('',[Validators.required, Validators.maxLength(30)])
  // })
  // onSubmit(){
  //   console.log('hi')
  //   console.log(this.profileForm.value)
  // }
  // get name2(){
  //   return this.profileForm.get('name2');
  // }
  // get email(){
  //   return this.profileForm.get('email');
  // }
  // get password(){
  //   return this.profileForm.get('password');
  // }


  //Template Driven Form
  addDetails(val:NgForm){
    console.log(val)
  }

  //Pipes in angular
  name4 = "hamza";
  today4 = new Date();
  price4 = 2500;

  amount = 10;
  

  



  

    // Data-Type in angular/ts
  // name="Hamza"
  // data: string | number = "Hello"   // | called union types
  // other: string|boolean|number = true   
  // other: any = true   //you can used 'any' keyword to acces to used assign any value
  // let x = 4; this not work in here but work inside function like below see
  // updateX(){
  //   let x = 4;
  // }
  //why not work in Angular: because angular components are classes and function it work because function as block scope

  

  // users:any[] = [];
  // constructor(private http: HttpClient){

  // }
  // getUsers(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users")
  //   .subscribe((data:any)=>{
  //     console.log(data);
  //     this.users =data;
  //   });
  // }

  updateName() {
    this.name = "Ali"
  }

  getNumber(a: number, b: number) {
    return a + b;
  }

  handleEvent(data: string) {
    console.log(data);
    this.getChildData = data;
  }

  increase(){
    this.count++;
  }
  reset(){
    this.count = 0;
  }
  decrement(){
    this.count--;
  }

  // btneventHandler(event: any){
  //   console.log(event.target.value);  //if i used type MouseEvent this line not work below eventHandler code work
  //   console.log((event.target as Element).classList)
  //   console.log((event.target as Element).className)
  //   console.log(event.type)
  // }
  btneventHandler(event: MouseEvent){
    console.log((event.target as HTMLInputElement).value);
    console.log((event.target as Element).classList)
    console.log((event.target as Element).className)
    console.log(event.type)
  }

  mousehandleEvent(event: MouseEvent){
    console.log(event.type);
  }

  keyhandleEvent(event:Event){
    console.log((event.target as HTMLInputElement).value);
    // console.log('focus called when someone click in input field')
    // console.log('blur called when someone leave mouse from input field')
    
  }

  getEmail(val: string){
    console.log(val)
  }

  // count WritableSignal<number, string> = signal<number | string>(0);  //give data type to signal value
  //WritableSignal<number, string> this line also give dataype to value and it type

  // 1️⃣ Basic signal
  count1 = signal(0);
  // 2️⃣ Derived signal
  doubleCount1 = computed(() => this.count1() * 2);   //you can't update computed signal value
  // Methods
  increment1() {
    // this.count1.set(20)  you can update singal value with set or update keyword
    this.count1.update(c => c + 1);  //if in count1 data have more than one than we can't used update method 
  }
  decrement1() {
    this.count1.update(c => c - 1);
  }

  //below code show if i used signal and change signal value it aldo update this value in computed function and see output diff
  // countA = signal(10)
  // countB = signal(20)
  // countZ = computed(()=> this.countA() + this.countB());

  // countA = 10; countB = 20; countZ = countA + count B;

  // showValue(){
  //   console.log(this.countZ()); //30     console.log(this.countZ)   //30
  //   this.countA.set(100);                this.countA = 100
  //   console.log(this.countZ()); //120    console.log(this.countZ)   //30
  // }

  //Effect in Angular

  // constructor(){
  //   effect(()=>{
  //     //track signal value when it update so we used condition like something
  //     // console.log(this.count1)
  //   })
  // }

  // For Loop Contextual Variables
  // $count, $index, $last, $first, $odd, $even, empty block with for loop 

  //Services
  constructor(private productService: Product){

  }

  productData: {
    name: string;
    branch: string;
    price: string;
  }[] | undefined

  getProductData(){
    this.productData = this.productService.getProductData();
    console.log(this.productData)
  }

}
