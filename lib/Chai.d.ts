import {AssertionError} from 'assertion-error';

import {AssertStatic} from './Assert';
import {AssertionStatic, Assertion} from './Assertion';
import {ExpectStatic} from './Expect';
import {Should} from './Should';
import {Config} from './Config';
import {Utils} from './Utils';


export * from './Assertion.d.ts';
export * from 'assertion-error';
export {AssertStatic} from './Assert.d.ts';
export {AssertionStatic, Assertion} from './Assertion.d.ts';
export {ExpectStatic} from './Expect.d.ts';
export {Should} from './Should.d.ts';
export {Config} from './Config.d.ts';
export {utils} from './utils.d.ts';

export declare var expect:ExpectStatic;
export declare var assert:AssertStatic;
export declare var config:Config;
export declare var util:utils;
export function should(): Should;
export function use(fn: (chai: any, utils: utils) => void): Chai;

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
  use(fn: (chai: any, utils: Utils) => void): Chai;
}

declare global {
  interface Object {
    should: Assertion;
  }
}
