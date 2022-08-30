import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTopComponent } from './option-top.component';

describe('OptionTopComponent', () => {
  let component: OptionTopComponent;
  let fixture: ComponentFixture<OptionTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
