import { Component } from "react";
import "./charList.scss";
import abyss from "../../resources/img/abyss.jpg";




class CharList extends Component {
  render() {

    return (
      <div className="char__list">
        <ul className="char__grid">
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">5</div>
          </li>
          <li className="char__item char__item_selected">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Новина</div>
          </li>
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Новина</div>
          </li>
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Новина</div>
          </li>
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Новина</div>
          </li>
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Новина</div>
          </li>
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Новина</div>
          </li>
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Новина</div>
          </li>
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">Новина</div>
          </li>
        </ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
