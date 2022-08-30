import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMyColorComponent } from './option-my-color.component';

describe('OptionMyColorComponent', () => {
  let component: OptionMyColorComponent;
  let fixture: ComponentFixture<OptionMyColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionMyColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMyColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
