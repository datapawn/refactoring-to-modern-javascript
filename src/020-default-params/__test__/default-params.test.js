import {
  rectangleArea,
  validTriangle,
  appendToArray,
  add,
  multiplyWithFactor,
} from '../default-and-rest-params';

describe('default-params', () => {
  describe('rectangleArea', () => {
    it('should correctly calculate area correctly', () => {
      expect.assertions(3);

      expect(rectangleArea()).toBe(100);
      expect(rectangleArea(2)).toBe(4);
      expect(rectangleArea(2, 4)).toBe(8);
    });
  });

  describe('validTriangle', () => {
    it('should correctly construct a triangle', () => {
      expect.assertions(3);

      expect(validTriangle()).toStrictEqual([10, 10, 14.14]);
      expect(validTriangle(2)).toStrictEqual([2, 2, 2.83]);
      expect(validTriangle(2, 4)).toStrictEqual([2, 4, 4.47]);
    });
  });

  describe('appendToArray', () => {
    it('should append correctly', () => {
      expect.assertions(2);

      expect(appendToArray(1)).toStrictEqual([1]);
      expect(appendToArray(1, [2, 3, 4])).toStrictEqual([2, 3, 4, 1]);
    });
  });

  describe('add', () => {
    it('should add numbers correctly', () => {
      expect.assertions(2);

      expect(add()).toBe(0);
      expect(add(1, 2, 3, 4, 5)).toBe(15);
    });
  });

  describe('multiplyWithFactor', () => {
    it('should multiple with the right factor', () => {
      // TODO: Finish this
      expect.assertions(3);

      expect(multiplyWithFactor()).toBe(1);
      expect(multiplyWithFactor(10)).toBe(10);
      expect(multiplyWithFactor(2, 2, 3)).toBe(12);
    });
  });
});
