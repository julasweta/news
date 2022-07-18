import { Component } from 'react';
import './charInfo.scss';

class CharInfo extends Component {
  state = {
    item: {},
  };




  render() {
    return (
      <div className="char__info">
        <div className="char__basics">
          <img src={this.props.item.thumbnail} alt="abyss" />
          <div>
            <div className="char__info-name">{this.props.item.name}</div>
            <div className="char__btns">
              <a href={this.props.item.homepage} className="button button__main">
                <div className="inner">Детальніше</div>
              </a>
              <a href="#" className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="char__descr">{this.state.item.description}</div>
        <div className="char__comics">Більше новин:</div>
        <ul className="char__comics-list">
          <li className="char__comics-item">Тут ще одна новина #3</li>
          <li className="char__comics-item">Тут ще одна новина #50</li>
          <li className="char__comics-item">Тут ще одна новина #503</li>
          <li className="char__comics-item">Тут ще одна новина #504</li>
          <li className="char__comics-item">Тут ще одна новина (1999)</li>
          <li className="char__comics-item">Тут ще одна новина</li>
          <li className="char__comics-item">Тут ще одна новина</li>
          <li className="char__comics-item">Тут ще одна новина #4</li>
          <li className="char__comics-item">Тут ще одна новина #1</li>
          <li className="char__comics-item">Тут ще одна новина #1</li>
        </ul>
      </div>
    );
  }
}

export default CharInfo;
