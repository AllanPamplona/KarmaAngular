import { TestBed } from '@angular/core/testing';
import { RomanService } from './roman.service';

describe('RomanService', () => {
  let service: RomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return I', () => {
    const result = service.convert(1);
    expect(result).toEqual('I');
  })
  it('should return V', () => {
    const result = service.convert(5);
    expect(result).toEqual('V');
  })
  it('should return IX', () => {
    const result = service.convert(9);
    expect(result).toEqual('IX');
  })
  it('should return L', () => {
    const result = service.convert(50);
    expect(result).toEqual('L');
  })
  it('should return C', () => {
    const result = service.convert(100);
    expect(result).toEqual('C');
  })
  it('should return CDXCIX', () => {
    const result = service.convert(499);
    expect(result).toEqual('CDXCIX');
  })
  it('should return CMXCIX', () => {
    const result = service.convert(999);
    expect(result).toEqual('CMXCIX');
  })
  it('should return M', () => {
    const result = service.convert(1000);
    expect(result).toEqual('M');
  })
});
