import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionKeyBeamComponent } from './option-key-beam.component';

describe('OptionKeyBeamComponent', () => {
  let component: OptionKeyBeamComponent;
  let fixture: ComponentFixture<OptionKeyBeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionKeyBeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionKeyBeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
