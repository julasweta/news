import React, { Component } from "react";
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
  onLoadMore =()=> {
    this.setState({
      resItems: [...this.state.resItems, ...this.state.resItems],
      loading: true,
    });
  }


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
        <Dynamic>
          <h3>Всі Новини</h3>
          <h3>Всі Новини</h3>
        </Dynamic>
        {this.allItems(this.state.resItems)}
        <button className="button button__main button__long">
          <div className="inner" onClick={this.onLoadMore}>
            load more
          </div>
        </button>
      </div>
    );
  }
}
const Dynamic =(props) =>{
  return <div className="b-2"> {
    React.Children.map(props.children, child => {
  return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
})
  }</div>;
 }
export default CharList;
