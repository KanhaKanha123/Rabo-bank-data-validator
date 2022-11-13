import { convertTextToArray } from './format-data';
import { testData, expectedData } from './fixture/test-data';

describe('Format-data.ts', () => {

  it('convertTextToArray should give the right data', () => {
    expect(convertTextToArray(testData)).toEqual(expectedData);
  });
});
