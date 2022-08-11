import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfrontComponent } from './cardfront.component';

describe('CardfrontComponent', () => {
  let component: CardfrontComponent;
  let fixture: ComponentFixture<CardfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
