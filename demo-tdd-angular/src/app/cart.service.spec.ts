import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';


//Describe permet de definir un ensemble de tests
describe('CartService', () => {
  let cartService: CartService;

  beforeEach(() => {
    cartService = new CartService()
  });


  //Chaque test unitaire est defini par la méthode it
  it('cart empty with undefined products', () => {
    //Arrange
    //let cartService: CartService = new CartService()
    cartService.products = undefined

    //Act
    const result = cartService.isCartEmpty()

    //Assert
    //Assertion avec jasmine se fait à l'aide de expect, et les matchers de jasmine
    expect(result).toBeTrue()
  });

  it('cart empty with empty products array', () => {
    //Arrange
    //let cartService: CartService = new CartService()
    cartService.products = []

    //Act
    const result = cartService.isCartEmpty()

    //Assert
    //Assertion avec jasmine se fait à l'aide de expect, et les matchers de jasmine
    expect(result).toBeTrue()
  });


  //Chaque test unitaire est defini par la méthode it
  it('cart not empty with array of products', () => {
    //Arrange
    //let cartService: CartService = new CartService()
    cartService.products = [
      {id:1, title: 'product 1'}
    ]

    //Act
    const result = cartService.isCartEmpty()

    //Assert
    //Assertion avec jasmine se fait à l'aide de expect, et les matchers de jasmine
    expect(result).toBeFalse()
  });

  it('cart number with empty cart', () => {
    //Arrange
    //let cartService: CartService = new CartService()
    cartService.products = []

    //Act
    const result = cartService.productsNumber()

    //Assert
    //Assertion avec jasmine se fait à l'aide de expect, et les matchers de jasmine
    expect(result).toBe(0)
  });

  it('cart product number with  1 product and multity quantity', () => {
    //Arrange
    //let cartService: CartService = new CartService()
    cartService.products = [{title  : 'product 1', price : 10, qty: 3}, {title  : 'product 1', price : 10, qty: 3}, {title  : 'product 1', price : 10, qty: 4}]

    //Act
    const result = cartService.productsNumber()

    //Assert
    //Assertion avec jasmine se fait à l'aide de expect, et les matchers de jasmine
    expect(result).toBe(10)
  });
});
