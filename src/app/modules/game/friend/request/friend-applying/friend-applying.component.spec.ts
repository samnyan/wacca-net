import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendApplyingComponent } from './friend-applying.component';

describe('FriendApplyingComponent', () => {
  let component: FriendApplyingComponent;
  let fixture: ComponentFixture<FriendApplyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendApplyingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendApplyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
