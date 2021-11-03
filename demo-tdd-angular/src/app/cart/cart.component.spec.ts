import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    //Configuration d'un module de test àl'aide de testBed,
    //On déclare nos composants, on importe nos module,...
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
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
});
