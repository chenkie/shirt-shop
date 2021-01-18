import { Test } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
