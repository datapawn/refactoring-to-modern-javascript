import {
  copyArray,
  createArrayFromArg,
  concatArrays,
  immutableArrayAppend,

  copyObject,
  objectMerge,
  immutableObjectAppend,

  first,
  phoneMatcher,
  celebrate,

  flatten,
} from '../destructuring-and-spread';


describe('rest-and-spread', () => {
  describe('copyArray', () => {
    it('should return a an empty array by default', () => {
      expect.assertions(1);

      const copy = copyArray();
      expect(copy).toStrictEqual([]);
    });

    it('should return a new array with the same entries', () => {
      expect.assertions(2);

      const orig = [12, 3, 45];
      const copy = copyArray(orig);
      expect(copy).not.toBe(orig);
      expect(copy).toStrictEqual([12, 3, 45]);
    });
  });

  describe('createArrayFromArg', () => {
    it('should return a new array with the same entries', () => {
      expect.assertions(2);

      const orig = [12, 3, 45];
      const copy = createArrayFromArg(...orig);
      expect(copy).not.toBe(orig);
      expect(copy).toStrictEqual([12, 3, 45]);
    });
  });

  describe('concatArrays', () => {
    it('should concat two arrays', () => {
      expect.assertions(3);

      const orig1 = [12, 3, 45];
      const orig2 = [5, 6, 7];
      const copy = concatArrays(orig1, orig2);
      expect(copy).not.toBe(orig1);
      expect(copy).not.toBe(orig2);

      expect(copy).toStrictEqual([12, 3, 45, 5, 6, 7]);
    });
  });

  // TODO: implement the method, then remove the .skip here to test it
  describe.skip('immutableArrayAppend', () => {
    it('should append two arrays into a new one', () => {
      expect.assertions(2);

      const orig = [1, 2, 3, 4];
      const copy = immutableArrayAppend(orig, 5, 6, 7, 8);
      expect(copy).not.toBe(orig);

      expect(copy).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('copyObject', () => {
    it('should return a an empty object by default', () => {
      expect.assertions(1);

      const copy = copyObject();
      expect(copy).toStrictEqual({});
    });

    it('should return a new object with the same key', () => {
      expect.assertions(2);

      const orig = {
        name: 'js',
        author: 'brendan',
      };
      const copy = copyObject(orig);
      expect(copy).not.toBe(orig);
      expect(copy).toStrictEqual({
        name: 'js',
        author: 'brendan',
      });
    });
  });

  describe('objectMerge', () => {
    it('should merge two object', () => {
      expect.assertions(3);

      const orig1 = {
        name: 'michelle',
        profession: 'programmer',
      };
      const orig2 = {
        profession: 'nurse',
        interests: 'gardening',
      };
      const copy = objectMerge(orig1, orig2);
      expect(copy).not.toBe(orig1);
      expect(copy).not.toBe(orig2);

      expect(copy).toStrictEqual({
        name: 'michelle',
        profession: 'nurse',
        interests: 'gardening',
      });
    });
  });

  // TODO: implement the method, then remove the .skip here to test it
  describe.skip('immutableObjectAppend', () => {
    it('should return a new fully defined object', () => {
      expect.assertions(2);

      const orig = {
        name: 'raju',
      };
      const copy = immutableObjectAppend(orig, 'profession', 'programmer');
      expect(copy).not.toBe(orig);

      expect(copy).toStrictEqual({
        name: 'raju',
        profession: 'programmer',
      });
    });
  });

  describe('first', () => {
    it('should return the first of an array, otherwise return null', () => {
      expect.assertions(3);

      expect(first()).toBeNull();
      expect(first([])).toBeNull();
      expect(first([3, 2, 1])).toBe(3);
    });
  });

  describe('phoneMatcher', () => {
    it('should successfully splice the phone number into zip/phone', () => {
      expect.assertions(3);

      const phoneNumber = '614-555-1234';
      const result = phoneMatcher(phoneNumber);

      expect(result).toBeInstanceOf(Array);
      expect(result[0]).toBe('614');
      expect(result[1]).toBe('5551234');
    });
  });

  describe('celebrate', () => {
    it('should return a default message', () => {
      expect.assertions(1);

      const result = celebrate({});
      expect(result).toBe('Ada Lovelace was a famous Mathematician');
    });

    it('should return a celebration message', () => {
      expect.assertions(1);

      const result = celebrate({
        firstName: 'Grace',
        lastName: 'Hopper',
        profession: 'Computer Scientist',
      });
      expect(result).toBe('Grace Hopper was a famous Computer Scientist');
    });
  });

  // TODO: MAJOR CHALLENGE!!
  describe.skip('flatten', () => {
    it('should return a new array', () => {
      expect.assertions(2);

      const orig = [];
      const result = flatten(orig);
      expect(result).not.toBe(orig);
      expect(result).toStrictEqual([]);
    });

    it('should flatten an array of arrays of arrays', () => {
      expect.assertions(2);

      const orig = [1, [2, 3], 4, [5, [6, 7]], 8, 9, 10];
      const result = flatten(orig);
      expect(result).not.toBe(orig);
      expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
