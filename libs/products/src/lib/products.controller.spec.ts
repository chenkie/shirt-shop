import { Test } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductsService],
      controllers: [ProductsController],
    }).compile();

    controller = module.get(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
