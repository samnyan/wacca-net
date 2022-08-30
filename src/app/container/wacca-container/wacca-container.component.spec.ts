import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaccaContainerComponent } from './wacca-container.component';

describe('WaccaContainerComponent', () => {
  let component: WaccaContainerComponent;
  let fixture: ComponentFixture<WaccaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaccaContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaccaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
