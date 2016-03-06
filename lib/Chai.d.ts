import {AssertionError} from 'assertion-error';

import {AssertStatic} from './Assert';
import {AssertionStatic, Assertion} from './Assertion';
import {ExpectStatic} from './Expect';
import {Should} from './Should';
import {Config} from './Config';
import {Utils} from './Utils';

export interface ChaiExtension {
  (chai: any, utils: utils):void;
  (chai: any):void
}

export interface Chai {
  AssertionError: typeof AssertionError;
  Assertion: AssertionStatic;
  expect: ExpectStatic;
  assert: AssertStatic;
  config: Config;
  util: Utils;
  should(): Should;

  /**
   * Provides a way to extend the internals of Chai
   *  fn will always be invoked with 2 arguments, but extension
   * is not required to use utils
   */
  use(fn: (chai: any, utils: Utils) => void): Chai;
  use(fn: ChaiExtension): Chai;
}

declare global {
  interface Object {
    should: Assertion;
  }
}
