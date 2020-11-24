import React from "react";
import "./styles/TimeNav.scss";
import "./styles/Item.scss"
// TODO добавить индикаторы

export default class Calendar extends React.Component {
  render() {
    return (
      <main className="Main" id="Calendar">
        <nav id="TimeNav">
          <button id="ResetToday">Сегодня</button>

          <button>Назад</button>

          <div className="point">
            <input type="radio" name="time" id="Day" value="1" />
            <label for="Day">День</label>
          </div>

          <div className="point">
            <input type="radio" name="time" id="Week" value="1" />
            <label for="Week">Неделя</label>
          </div>

          <div className="point">
            <input type="radio" name="time" id="Month" value="1" />
            <label for="Month">Месяц</label>
          </div>

          <button>Вперёд</button>
        </nav>

        <div id="Item">
          <table id="Matrix">
            <tr>
              <th>Пн</th>
              <th>Вт</th>
              <th>Ср</th>
              <th>Чт</th>
              <th>Пт</th>
              <th>Сб</th>
              <th>Вс</th>
            </tr>
            {new Array(96).fill(1).map((i, j) => (
              <tr className={(j+1) % 4 == 0 ? "col Hour" : "col"} data-minute={(j+1)*15}>
                <td data-day="9"></td>
                <td data-day="10"></td>
                <td data-day="11"></td>
                <td data-day="12"></td>
                <td data-day="13"></td>
                <td data-day="14"></td>
                <td data-day="15"></td>
              </tr>
            ))}
          </table>
        </div>
      </main>
    );
  }
}
