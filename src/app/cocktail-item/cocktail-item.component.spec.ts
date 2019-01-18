import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailItemComponent } from './cocktail-item.component';

describe('CocktailItemComponent', () => {
  let component: CocktailItemComponent;
  let fixture: ComponentFixture<CocktailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
