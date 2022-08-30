import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicUnlockComponent } from './music-unlock.component';

describe('MusicUnlockComponent', () => {
  let component: MusicUnlockComponent;
  let fixture: ComponentFixture<MusicUnlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicUnlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicUnlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
