import { TestBed, inject } from '@angular/core/testing';

import { PetShelterService } from './pet-shelter.service';

describe('PetShelterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetShelterService]
    });
  });

  it('should be created', inject([PetShelterService], (service: PetShelterService) => {
    expect(service).toBeTruthy();
  }));
});
