import sum from './sum';

describe('test sum', () => {
  test('should sum return right answer', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
