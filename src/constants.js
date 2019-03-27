/**
 * Список статусов ответов от бекенда
 * @const
 * @type {!JSON}
 * @property {string} ok - Статус "ОК"
 * @property {string} error - Статус "ERROR"
 * @property {string} warn - Статус "WARN"
*/
export const RESPONSE_STATUS_LIST = {
  ok: 'ok',
  error: 'error',
  warn: 'warn',
};

/**
 * Список css-стилей для проверяемых документов
 * @const
 * @type {!JSON}
 * @property {string} inProcess - Статус "В процессе проверки"
 * @property {string} success - Статус "Успешно проверено"
 * @property {string} error - Статус "Ошибка проверки"
*/
export const DOCUMENT_STATUS_STYLE = {
  inProcess: 'nochecked',
  success: '',
  error: 'fail',
};
