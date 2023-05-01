import { TestBed } from '@angular/core/testing';

import { FormulaireDataService } from './formulaire-data.service';

describe('FormulaireDataService', () => {
  let service: FormulaireDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaireDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
