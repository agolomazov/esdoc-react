import React from 'react';

/**
 * Компонент заголовка страницы
 * 
 * @example
 * <Header format={2}>Тестовый заголовок страницы</Header>
 * 
 * @param {{ format: number, children: React.Element }} props - Параметры компонента
 * @property {number} props.format - Уровень заголовка
 * @property {React.Element} props.children - Содержимое заголовка
 * 
 * @return {React.SFC} Заголовок страницы
 */
export const Header = ({ children, format }) => {
  const htmlData = () => ({
    __html: `<h${format}>${children}</h${format}>`,
  })
  return <div dangerouslySetInnerHTML={htmlData()} />;
}
