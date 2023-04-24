import { TestBed } from '@angular/core/testing';

import { EntrepriseDataService } from './entreprise-data.service';

describe('EntrepriseDataService', () => {
  let service: EntrepriseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrepriseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
