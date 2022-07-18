import { Component } from "react";
import "./charList.scss";
import NewsService from "../../services/NewsService";

class CharList extends Component {
  state = {
    resItems: [],
    loading: false,
  };

  componentDidMount() {
    this.setItems();
  }

  newsService = new NewsService();

  /*записуємо масив з всіма постами */
  setItems = () => {
    this.newsService.getAllPosts().then((res) => {
      this.setState({
        resItems: res,
      });
    });
  };

  /*Перебираємо масиви і записуємо в кожний окремий пост */
  allItems(arr) {
    const items = arr.map((item) => {
      // записуємо кожний пост
      return (
        <li
          className="char__item"
          key={item.id}
          onClick={() => this.props.setPostId(item.id)}
        >
          <img src={item.thumbnail} alt={item.name} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    //записуємо всі пости
    return <ul className="char__grid">{items}</ul>;
  }

  render() {
    return (
      <div className="char__list">
        {this.allItems(this.state.resItems)}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
