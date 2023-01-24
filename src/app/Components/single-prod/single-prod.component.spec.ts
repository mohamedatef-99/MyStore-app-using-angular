import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProdComponent } from './single-prod.component';

describe('SingleProdComponent', () => {
  let component: SingleProdComponent;
  let fixture: ComponentFixture<SingleProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
