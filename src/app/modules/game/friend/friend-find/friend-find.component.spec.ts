import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFindComponent } from './friend-find.component';

describe('FriendFindComponent', () => {
  let component: FriendFindComponent;
  let fixture: ComponentFixture<FriendFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendFindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
