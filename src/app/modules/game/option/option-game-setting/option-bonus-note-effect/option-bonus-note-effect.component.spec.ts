import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBonusNoteEffectComponent } from './option-bonus-note-effect.component';

describe('OptionBonusNoteEffectComponent', () => {
  let component: OptionBonusNoteEffectComponent;
  let fixture: ComponentFixture<OptionBonusNoteEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionBonusNoteEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionBonusNoteEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
