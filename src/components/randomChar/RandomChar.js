import { Component } from 'react';
import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';
import NewsService from "../../services/NewsService";


class RandomChar extends Component {
  constructor(props) {
    super(props);
  this.updatePost();
  }
state = {
      name: null,
      description: 154,
      thumbnail: null,
      homepage: null,
      wiki: null,
    };


  newsService = new NewsService();


/* Головна новина*/
  updatePost = (id = 2) => {
    this.newsService.getAllPosts().then(res => {
      this.setState({
        name: res.articles[id].title,
        description: res.articles[id].description,
        thumbnail: res.articles[id].urlToImage,
        homepage: res.articles[id].url,
        wiki: res.articles[id].author,
      });
    });
  };

/* Зміна головної новини*/
  changeNews = () => {
    let number = Math.floor(Math.random() * 20);
    this.updatePost(number)
}

  render() {
    const { name, description, thumbnail, homepage, wiki } = this.state;


    return (
      <div className="randomchar">
        <div className="randomchar__block">
          <img src={thumbnail} alt="Random character" className="randomchar__img" />
          <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">{description}...</p>
            <div className="randomchar__btns">
              <a href={homepage} className="button button__main">
                <div className="inner">Детальніше</div>
              </a>
              <a href={thumbnail} className="button button__secondary">
                <div className="inner">{wiki}</div>
              </a>
            </div>
          </div>
        </div>
        <div className="randomchar__static">
          <p className="randomchar__title">
            Переглянь інші новини
            <br />
           Головні новини дня
          </p>
          <p className="randomchar__title">Натисни тут для перегляду інших новин дня</p>
          <button className="button button__main"
          onClick={this.changeNews}>
            <div className="inner">Наступна новина</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

export default RandomChar;
