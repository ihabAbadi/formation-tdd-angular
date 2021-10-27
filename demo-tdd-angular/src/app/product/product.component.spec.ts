import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  //Pour  pouvoir appliquer des tests à des éléments créés par le container de dependance Angular
  // => on doit emuler un module de test => Graçe à la classe TestBed
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[ProductComponent],
      imports:[],
      providers:[]
    })
  })
  it("first test of our compoent", ()=> {
    //let component = new ProductComponent()
    //Grace à testBed, on genère une fixture (entité qui permet de créer des composants)
    const fixture = TestBed.createComponent(ProductComponent)
    //On récupère l'instance du composant
    const component = fixture.componentInstance;

    //On peut également récupérer le DebugElement (entité qui contient le rendu html pour le tester)
    const debugElement = fixture.debugElement

    //On peut tester les propriétés de notre composant.
    component.title = "produit 1"
    //on peut comparer dans la partie assertion le rendu par rapport aux propriétés modifiées.
    //Mais avant il faut actualiser le rendu, grace à la méthode detectChanges
    fixture.detectChanges()

    //On récupère le rendu natif.
    const textH1 = debugElement.nativeElement.querySelector('h1').textContent
    expect(textH1).toEqual('produit 1')
  })
});
