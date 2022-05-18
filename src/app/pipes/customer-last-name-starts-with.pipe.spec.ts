import { CustomerLastNameStartsWithPipe } from './customer-last-name-starts-with.pipe';

describe('StringStartsWithFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomerLastNameStartsWithPipe();
    expect(pipe).toBeTruthy();
  });
});
