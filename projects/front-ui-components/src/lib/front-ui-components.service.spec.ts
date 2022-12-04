import { TestBed } from '@angular/core/testing';

import { FrontUiComponentsService } from './front-ui-components.service';

describe('FrontUiComponentsService', () => {
  let service: FrontUiComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontUiComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
