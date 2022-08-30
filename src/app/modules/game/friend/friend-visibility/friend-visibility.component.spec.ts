import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendVisibilityComponent } from './friend-visibility.component';

describe('FriendVisibilityComponent', () => {
  let component: FriendVisibilityComponent;
  let fixture: ComponentFixture<FriendVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendVisibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
