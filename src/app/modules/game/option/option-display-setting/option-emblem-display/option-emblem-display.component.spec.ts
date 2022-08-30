import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionEmblemDisplayComponent } from './option-emblem-display.component';

describe('OptionEmblemDisplayComponent', () => {
  let component: OptionEmblemDisplayComponent;
  let fixture: ComponentFixture<OptionEmblemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionEmblemDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionEmblemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
