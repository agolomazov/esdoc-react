import React, { Component } from 'react';
import './App.css';
import { Header, Button } from './common/components';

/**
 *  Компонент App - точка входа в приложение
 */
class App extends Component {
  /**
   * Локальный стейт приложения
   * @type {switcher: boolean, title: string, counter: number}
   * @property {boolean} switcher - состояния радио-кнопки
   * @property {string} title - состояния заголовка
   * @property {number} counter - состояния счетчика
   */
  state = {
    switcher: false,
    title: '',
    counter: 0
  };

  /**
   * Метод обработчик клика по счетчику
   * @param {Event} event - Объект события клика
   */
  handleClickCounter = (event) => {
    event.preventDefault();

    this.setState(prevState => ({
      counter: prevState + 1,
    }));
  };

  /**
   * Метод обработчик переключения радио-кнопки
   * @param {Event} event - Объект события переключения
   */
  handleToggleSwitcher = (event) => {
    event.preventDefault();

    this.setState(prevState => ({
      switcher: !prevState,
    }));
  };

  /**
   * Метод обработчик события изменения текста заголовка
   * @param {Event} event - Объект события текстового поля
   */
  handleChangeTitle = (event) => {
    event.preventDefault();

    this.setState({
      title: event.target.value,
    });
  };

  /**
   *  Метод render - отображает все приложение
   * 
   * @return {React.Component}
   */
  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <Header format={2}>Тестовый заголовок приложения</Header>
        <Button
          onClick={this.handleClickCounter}
          classes={'btn btn-primary'}
        >
          Кликай по мне (${counter})
        </Button>
      </div>
    );
  }
}

export default App;
