import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayDataComponent } from './play-data.component';

describe('PlayDataComponent', () => {
  let component: PlayDataComponent;
  let fixture: ComponentFixture<PlayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
