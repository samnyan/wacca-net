import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviCharacterComponent } from './navi-character.component';

describe('NaviCharacterComponent', () => {
  let component: NaviCharacterComponent;
  let fixture: ComponentFixture<NaviCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaviCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
