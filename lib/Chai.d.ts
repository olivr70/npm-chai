import {AssertionError} from 'assertion-error';

import {AssertStatic} from './Assert';
import {AssertionStatic, Assertion} from './Assertion';
import {ExpectStatic} from './Expect';
import {Should} from './Should';
import {Config} from './Config';
import {Utils} from './Utils';

export * from './Assertion';
export * from 'assertion-error';
export {AssertStatic} from './Assert';
export {AssertionStatic, Assertion} from './Assertion';
export {ExpectStatic} from './Expect';
export {Should} from './Should';
export {Config} from './Config';
export {Utils} from './Utils';

export declare var expect:ExpectStatic;
export declare var assert:AssertStatic;
export declare var config:Config;
export declare var util:Utils;
export function should(): Should;
export function use(fn: ((chai: any, utils: Utils) => void) | ((chai: any) => void) ): Chai;

export interface ChaiExtension {
  (chai: any, utils: Utils):void;
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
  use( fn: ((chai: any, utils: Utils) => void) | ((chai: any) => void) ): Chai;
}

declare global {
  interface Object {
    should: Assertion;
  }
}
