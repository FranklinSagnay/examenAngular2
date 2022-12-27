import { TestBed } from '@angular/core/testing';

import { GifCrudService } from './gif-crud.service';

describe('GifCrudService', () => {
  let service: GifCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
