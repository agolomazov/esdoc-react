import qs from 'qs';

/**
 * Парсинг параметров адресной строки
 * 
 * @example
 * const searchParams = '?search=Google&ads=no&apple=yes';
 * parseQueryString(searchParams); // { search: 'Google', ads: 'no', apple: 'yes' }
 * 
 * @param {string} searchParams - Параметры GET запроса (из адресной строки)
 * @return {Object} GET-параметры из адресной строки в виде объекта
 */
export function parseQueryString(searchParams) {
  const prepareParams = searchParams[0] === '?' ? searchParams.slice(1) : searchParams;
  return qs.parse(prepareParams);
}
