import React from 'react';

/**
 * Компонент кнопки
 * 
 * @example
 * <Button onClick={this.handleClick} type="submit">Отправить</Button>
 * 
 * @param {Object} props - Параметры компонента
 * @property {React.Element} props.children - Внутреннее содержимое кнопки
 * @property {string} type - Тип кнопки
 * @property {string} classes - Список css-классов
 * 
 * @return {React.SFC<{children: React.Element, type: string, classes: string}>} Компонент копки
 */
export const Button = ({
  children,
  onClick,
  classes,
  type
}) => (
  <button 
    type={type}
    onClick={onClick}
    className={classes}
  >
    {children}
  </button>
);