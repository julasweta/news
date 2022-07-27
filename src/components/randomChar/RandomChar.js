import {  useEffect, useState } from "react";
import "./randomChar.scss";
import NewsService from "../../services/NewsService";

const RandomChar = (props) => {

  /*   */


  /*  */

  const [resItem, setResItem] = useState({});

  useEffect(() => {
    updatePost(0);
  }, [])

  let newsService = new NewsService();

  /* Головна новина*/
  const updatePost = (id = 0) => {
    newsService.getPost(id).then((res) => {
      setResItem(resItem => res)
    });
  };

  /* Зміна головної новини*/

  const changeNews = () => {
    newsService.getAllPosts().then((res) => {
      let number = Math.floor(Math.random() * res.length);
      updatePost(number);
    });
  };


  return (
    <div className="randomchar">
      <View resItem={resItem} />

      <div className="randomchar__static">
        <p className="randomchar__title">
          Переглянь інші новини
          <br />
          Головні новини дня
        </p>
        <p className="randomchar__title">
          Натисни тут для перегляду інших новин дня
        </p>
        <button className="button button__main" onClick={changeNews}>
          <div className="inner">Наступна новина</div>
        </button>
      </div>
    </div>
  );

}

const View = (resItem) => {
  return (
    <div className="randomchar__block">
      <img
        src={resItem.resItem.thumbnail}
        alt="Random character"
        className="randomchar__img"
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{resItem.resItem.name}</p>
        <p className="randomchar__descr">{resItem.resItem.description}...</p>
        <div className="randomchar__btns">
          <a href={resItem.resItem.homepage} className="button button__main">
            <div className="inner">Детальніше</div>
          </a>
          <a
            href={resItem.resItem.thumbnail}
            className="button button__secondary"
          >
            <div className="inner">{resItem.resItem.wiki}</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RandomChar;
