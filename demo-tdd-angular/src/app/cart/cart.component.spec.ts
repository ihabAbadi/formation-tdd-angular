import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CartService } from '../cart.service';
import { ProductComponent } from '../product/product.component';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service:CartService
  beforeEach(async () => {
    //Configuration d'un module de test àl'aide de testBed,
    //On déclare nos composants, on importe nos module,...
    await TestBed.configureTestingModule({
      declarations: [ CartComponent, ProductComponent ],
      providers: [CartService]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    //Grace à notre TestBed, on genere une fixture "une fixture est une entité qui permet d'émuler un composant"
    fixture = TestBed.createComponent(CartComponent);
    //Notre composant
    component = fixture.componentInstance;
    
    fixture.detectChanges();

  });

  it('test render total cart value when total cart is set to 40 euros', () => {
    component.totalCart = 40
    fixture.detectChanges()
    const element:HTMLElement = fixture.nativeElement.querySelector('.total')

    expect(element.textContent).toEqual('40');
  });

  it('the number of rows table should be equal to number of product', () => {
    service = TestBed.inject(CartService)
    //Pour faire du mock on utilise la spyOn
    spyOn(service, 'getProductsFromAPI').and.returnValue([{intitule : 'product 1'}])
    component.products = service.getProductsFromAPI()
    
    fixture.detectChanges();
    const element: any = fixture.debugElement.queryAll(By.css('.rowProduct'));
    expect(element.length).toEqual(1);
  });
  it('the first row of table should be A', () => {
    component.products = [
      { id: '1', intitule: 'A', price: 0 },
      { id: '2', intitule: 'B', price: 0 },
      { id: '3', intitule: 'C', price: 0 },
    ];
    fixture.detectChanges();
    const element: any = fixture.debugElement.queryAll(By.css('.rowProduct'));
    expect(element[0].nativeElement.textContent.trim()).toEqual('A');
  });
});
