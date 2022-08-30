import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTopComponent } from './box-top.component';

describe('BoxTopComponent', () => {
  let component: BoxTopComponent;
  let fixture: ComponentFixture<BoxTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
