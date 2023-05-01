import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireVisuComponent } from './formulaire-visu.component';

describe('FormulaireVisuComponent', () => {
  let component: FormulaireVisuComponent;
  let fixture: ComponentFixture<FormulaireVisuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireVisuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
