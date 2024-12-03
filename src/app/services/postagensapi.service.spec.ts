import { TestBed } from '@angular/core/testing';

import { PostagensapiService } from './postagensapi.service';

describe('PostagensapiService', () => {
  let service: PostagensapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostagensapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
