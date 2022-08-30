import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMirrorComponent } from './option-mirror.component';

describe('OptionMirrorComponent', () => {
  let component: OptionMirrorComponent;
  let fixture: ComponentFixture<OptionMirrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionMirrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
