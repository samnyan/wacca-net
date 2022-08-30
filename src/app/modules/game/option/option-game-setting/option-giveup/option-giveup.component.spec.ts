import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGiveupComponent } from './option-giveup.component';

describe('OptionGiveupComponent', () => {
  let component: OptionGiveupComponent;
  let fixture: ComponentFixture<OptionGiveupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGiveupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionGiveupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
