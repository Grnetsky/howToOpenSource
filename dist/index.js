/*
* rollup_demo 1.0.0
* Licensed under MIT
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Array$from = _interopDefault(require('@babel/runtime-corejs2/core-js/array/from'));

function clone(target) {
  var a = 1;
  _Array$from('abc');
  return target + a;
}

exports.clone = clone;
