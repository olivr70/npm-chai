import {Assertion} from './Assertion.d.ts';
import {AssertionError} from 'assertion-error';
import {AssertStatic} from './Assert.d.ts';
import {AssertionStatic} from './Assertion.d.ts';
import {ExpectStatic} from './Expect.d.ts';
import {Should} from './Should.d.ts';
import {Config} from './Config.d.ts';
import {utils} from './utils.d.ts';


export * from './Assertion.d.ts';
export {utils} from './utils.d.ts';

export * from 'assertion-error';
export declare var expect:ExpectStatic;
export declare var Assertion:AssertionStatic;
export declare var assert:AssertStatic;
export declare var config:Config;
export declare var util:utils;
export function should(): Should;
export function use(fn: (chai: any, utils: utils) => void): Chai;

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
  util: utils;
  should(): Should;

  /**
   * Provides a way to extend the internals of Chai
   *  fn will always be invoked with 2 arguments, but extension
   * is not required to use utils
   */
  use(fn: ChaiExtension): Chai;
}

declare global {
  interface Object {
    should: Assertion;
  }
}
