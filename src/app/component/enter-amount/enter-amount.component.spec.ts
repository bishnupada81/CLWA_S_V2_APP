import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAmountComponent } from './enter-amount.component';

describe('EnterAmountComponent', () => {
  let component: EnterAmountComponent;
  let fixture: ComponentFixture<EnterAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
