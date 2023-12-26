//karma is the
//jasmine is the library to run the testing code
//unit test
//suites which is group of tests
//describe('testname',Arrow function)
//the test itself
//it(testname,Arrow function)
//describe() it() expect() .tobe()=equal
import { compute } from './compute';

describe('compute', () => {
  it('should return zero if input is negative number', () => {
    const res = compute(-1);
    expect(res).toBe(0);
  });
  it('should increment the number if input is positive number', () => {
    const res = compute(1);
    expect(res).toBe(2);
  });
});
