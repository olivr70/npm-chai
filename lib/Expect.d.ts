import {AssertionStatic} from './Assertion';

export interface ExpectStatic extends AssertionStatic {
  fail(actual?: any, expected?: any, message?: string, operator?: string): void;
}
