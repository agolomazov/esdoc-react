import * as R from 'ramda';

/**
 * Метод преобразует первый символ строки в верхний регистр
 * 
 * @example
 * let someStr = 'василий';
 * someStr = toCapitalize(someStr); // Василий
 * 
 * @param {string} str - Строка для преобразования
 * @return {string} Строка начинающаяся с символа в верхнем регистре
 */
export function toCapitalize(str) {
  return R.compose(
    ({ head, tail }) => `${R.toUpper(head)}${R.toLower(tail)}`,
    _ => ({ head: R.head(), tail: R.tail(_) })
  )(str);
}