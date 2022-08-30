import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionChainNoteColorComponent } from './option-chain-note-color.component';

describe('OptionChainNoteColorComponent', () => {
  let component: OptionChainNoteColorComponent;
  let fixture: ComponentFixture<OptionChainNoteColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionChainNoteColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionChainNoteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
