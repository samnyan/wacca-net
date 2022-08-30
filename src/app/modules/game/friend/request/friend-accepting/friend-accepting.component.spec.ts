import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendAcceptingComponent } from './friend-accepting.component';

describe('FriendAcceptingComponent', () => {
  let component: FriendAcceptingComponent;
  let fixture: ComponentFixture<FriendAcceptingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendAcceptingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendAcceptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
