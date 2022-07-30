import React, { Component, useEffect, useState } from "react";
import "./charList.scss";
import NewsService from "../../services/NewsService";

const CharList = (props) => {
  const [resItems, setResItems] = useState([]);
  const [count, setCount] = useState(6);

  useEffect(() => {
    setItems();
  }, []);

  let newsService = new NewsService();

  /*записуємо масив з всіма постами */
  const setItems = () => {
    newsService.getAllPosts().then((res) => {
      setResItems(resItems => res)
    });
  };

  const onLoadMore = () => {
    if(count < (resItems.length - 3))
    {
      setCount((count) => count + 3)
    } else {
      alert('У цьому розділі ви переглянули всі новини')
    }

  }


  /*Перебираємо масиви і записуємо в кожний окремий пост */
  const allItems = (arr,count) => {
    const items = arr.map((item, index) => {
      // записуємо кожний пост
      if (index < count) {
        return (
          <li
            className="char__item"
            key={item.id}
            onClick={
              (() => props.setPostId(item.id))}
          >
            <img src={item.thumbnail} alt={item.name} />
            <div className="char__name">{item.name}</div>
          </li>
        );
      }
    });
    //записуємо всі пости
    return <ul className="char__grid">{items}</ul>;
  }


  return (
    <div className="char__list">

      {allItems(resItems, count)}
      <button className="button button__main button__long">
        <div className="inner" onClick={onLoadMore}>
          load more
        </div>
      </button>
    </div>
  );
}


export default CharList;
