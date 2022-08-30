import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendPlayerComponent } from './friend-player.component';

describe('FriendPlayerComponent', () => {
  let component: FriendPlayerComponent;
  let fixture: ComponentFixture<FriendPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
