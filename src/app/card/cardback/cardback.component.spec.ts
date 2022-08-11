import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbackComponent } from './cardback.component';

describe('CardbackComponent', () => {
  let component: CardbackComponent;
  let fixture: ComponentFixture<CardbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
