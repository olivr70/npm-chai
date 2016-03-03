import {Assertion} from './Assertion.d.ts';
import {AssertionError} from 'assertion-error';
import {AssertStatic} from './Assert.d.ts';
import {AssertionStatic} from './Assertion.d.ts';
import {ExpectStatic} from './Expect.d.ts';
import {Should} from './Should.d.ts';
import {Config} from './Config.d.ts';
import {utils} from './utils.d.ts';


export * from './Assertion.d.ts';

export interface Chai {
  AssertionError: typeof AssertionError;
  Assertion: AssertionStatic;
  expect: ExpectStatic;
  assert: AssertStatic;
  config: Config;
  util: utils;
  should(): Should;

  /**
   * Provides a way to extend the internals of Chai
   */
  use(fn: (chai: any, utils: utils) => void): Chai;
}

declare global {
  interface Object {
    should: Assertion;
  }
}
