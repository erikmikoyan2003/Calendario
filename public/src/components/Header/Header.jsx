import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header id="Header">
        <nav>
          <div className="point">
            <Link to="/calendar">Календарь</Link>
          </div>
          <div className="point">
            <Link to="/overview">Обзор</Link>
          </div>
          <div className="point">
            <Link to="/tasks">Задачи</Link>
          </div>
          <div className="point">
            <Link to="/tracker">Трекер</Link>
          </div>
        </nav>

        <div id="pageSettings">
          <div className="point">
            <button>Темный режим</button>
          </div>
          <div className="point">
            <div>Настройки</div>
          </div>
        </div>
      </header>
    );
  }
}
