import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPlayerNameComponent } from './option-player-name.component';

describe('OptionPlayerNameComponent', () => {
  let component: OptionPlayerNameComponent;
  let fixture: ComponentFixture<OptionPlayerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionPlayerNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionPlayerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
