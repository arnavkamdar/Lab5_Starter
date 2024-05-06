// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone number tests.
test('checks if 834-829-UABC is a valid phone number', () => {
  expect(isPhoneNumber("834-829-UABC")).toBe(false);
});
test('checks if <hello there> is a valid phone number', () => {
  expect(isPhoneNumber("hello there")).toBe(false);
});
test('checks if (100)-599-2933 is a valid phone number', () => {
  expect(isPhoneNumber("(100)-599-2933")).toBe(true);
});
test('checks if 723-2412 is a valid phone number', () => {
  expect(isPhoneNumber("723-2412")).toBe(true);
});

// Email tests.
test('checks if 1234 is a valid email', () => {
  expect(isEmail("1234")).toBe(false);
});
test('checks if whatever@gmail.comm is a valid email', () => {
  expect(isEmail("whatever@gmail.comm")).toBe(false);
});
test('checks if hello_there@gmail.com is a valid email', () => {
  expect(isEmail("hello_there@gmail.com")).toBe(true);
});
test('checks if something@yahoo.us is a valid email', () => {
  expect(isEmail("something@yahoo.us")).toBe(true);
});

// isStrongPassword tests
test('checks if 123456 is a valid password', () => {
  expect(isStrongPassword("123456")).toBe(false);
});
test('checks if f1339320jdfskdfjdskl is a valid password', () => {
  expect(isStrongPassword("f1339320jdfskdfjdskl")).toBe(false);
});
test('checks if pA55w0rd is a valid password', () => {
  expect(isStrongPassword("pA55w0rd")).toBe(true);
});
test('checks if strong_pass is a valid password', () => {
  expect(isStrongPassword("strong_pass")).toBe(true);
});

// isDate tests
test('checks if 2004/03/27 is a valid date', () => {
  expect(isDate("2004/03/27")).toBe(false);
});
test('checks if 03/27/04 is a valid date', () => {
  expect(isDate("03/27/04")).toBe(false);
});
test('checks if 03/27/2004 is a valid date', () => {
  expect(isDate("03/27/2004")).toBe(true);
});
test('checks if 3/27/2004 is a valid date', () => {
  expect(isDate("3/27/2004")).toBe(true);
});

// isHexColor tests
test('checks if #@^1038 is a valid hex-color', () => {
  expect(isHexColor("#@^1038")).toBe(false);
});
test('checks if fff is a valid hex-color', () => {
  expect(isHexColor("ff")).toBe(false);
});
test('checks if fff is a valid hex-color', () => {
  expect(isHexColor("fff")).toBe(true);
});
test('checks if #123456 is a valid hex-color', () => {
  expect(isHexColor("#123456")).toBe(true);
});
