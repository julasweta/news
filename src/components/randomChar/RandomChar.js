import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
    return (
      <div className="randomchar">
        <div className="randomchar__block">
          <img src={thor} alt="Random character" className="randomchar__img" />
          <div className="randomchar__info">
            <p className="randomchar__name">Головне</p>
            <p className="randomchar__descr">
              Головна новина дня Головна новина дня Головна новина дня Головна
              новина дня Головна новина дня Головна новина дня Головна новина
              дня Головна новина дня...
            </p>
            <div className="randomchar__btns">
              <a href="#" className="button button__main">
                <div className="inner">Детальніше</div>
              </a>
              <a href="#" className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
}

export default RandomChar;
