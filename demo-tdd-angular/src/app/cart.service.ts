import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products?:Array<any> = new Array()
  constructor() { }

  //Return true if cart is empty
  isCartEmpty() {
    // if(this.products != undefined && this.products?.length > 0) {
    //   return false
    // } else {
    //   return true
    // }

    return !(this.products != undefined && this.products?.length > 0)
  }

  //Get Total amount of our cart
  totalCart() {

  }

  //Get number of distinct products
  productsNumber():number {
    let total = 0;
    this.products?.forEach(p => {
      total += p.qty
    })
    return total
    //return (this.products) ? this.products[0].qty : 0
  }
}
