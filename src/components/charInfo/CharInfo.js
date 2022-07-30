import './charInfo.scss';
import { Link } from "react-router-dom";

const CharInfo = (props) => {

  const items = props.resPosts.map((item) => {
    return (
      <a key={item.id} href={item.homepage}>
        <li className="char__comics-item">{item.name} </li>
      </a>
    );
  });

return (
  <div className="char__info">
    <div className="char__basics">
      <img src={props.item.thumbnail} alt="abyss" />
      <div>
        <div className="char__info-name">{props.item.name}</div>
        <div className="char__btns">
          <Link
            to="/post" /* { props.item.homepage } */
            className="button button__main"
            target="blank"
          >
            <div className="inner">Детальніше</div>
          </Link>
          <a href="#" className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
    <div className="char__descr"></div>
    <div className="char__comics">Більше новин:</div>
    <ul className="char__comics-list">{items}</ul>
  </div>
);

}

export default CharInfo;
