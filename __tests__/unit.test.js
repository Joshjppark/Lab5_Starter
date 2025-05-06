// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// phone number
test('valid phone number', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(true);
});
test('valid phone number', () => {
  expect(isPhoneNumber('000-000-1111')).toBe(true);
});
test('non valid phone number', () => {
  expect(isPhoneNumber('abc-abc-0000')).toBe(false);
});
test('non valid phone number', () => {
  expect(isPhoneNumber('000-000-1a11')).toBe(false);
});

// is email
test('valid email', () => {
  expect(isEmail('hello@gmail.com')).toBe(true);
});
test('valid email', () => {
  expect(isEmail('hello@randomdot.zz')).toBe(true);
});
test('non valid email', () => {
  expect(isEmail('hello')).toBe(false);
});
test('non valid email', () => {
  expect(isEmail('hello@')).toBe(false);
});

//isStrongPassword
test('valid strong password', () => {
  expect(isStrongPassword('aaaa')).toBe(true);
});
test('valid strong password', () => {
  expect(isStrongPassword('abc_')).toBe(true);
});
test('non valid strong password', () => {
  expect(isStrongPassword('aaa')).toBe(false);
});
test('non valid strong password', () => {
  expect(isStrongPassword('123abc')).toBe(false);
});

//isdate
test('valid date', () => {
  expect(isDate('00/00/0000')).toBe(true);
});
test('valid date', () => {
  expect(isDate('99/99/9999')).toBe(true);
});
test('non valid date', () => {
  expect(isDate('00_00_0000')).toBe(false);
});
test('non valid date', () => {
  expect(isDate('999/99/9999')).toBe(false);
});

//ishexcolor
test('valid hexcolor', () => {
  expect(isHexColor('abc')).toBe(true);
});
test('valid hexcolor', () => {
  expect(isHexColor('#abc')).toBe(true);
});
test('non valid hexcolor', () => {
  expect(isHexColor('abcd')).toBe(false);
});
test('non valid hexcolor', () => {
  expect(isHexColor('#abcd')).toBe(false);
});