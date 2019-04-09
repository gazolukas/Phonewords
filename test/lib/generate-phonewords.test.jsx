import generatePhonewords from '../../src/lib/generate-phonewords';

describe('Generate Phonewords', () => {
  test('given the input 23 should return string', () => {
    const output = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(generatePhonewords('23')).toEqual(output);
  });
  test('should return no error with NaN input', () => {
    const output = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(generatePhonewords('2r3')).toEqual(output);
  });
  test('should return no error with 0 number', () => {
    const output = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(generatePhonewords('203')).toEqual(output);
  });
  test('should return error with # character', () => {
    expect(generatePhonewords('#')).toEqual([]);
  });
});
