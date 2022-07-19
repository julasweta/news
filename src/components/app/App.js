import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import NewsService from "../../services/NewsService";

class App extends Component {
  state = {
    postId: 1,
    item: {
      name: "Зроби свій вибір - натисни на новину у блоці ліворуч",
      description: "Зроби свій вибір",
      thumbnail:
        "https://cdn.pixabay.com/photo/2022/03/03/13/00/heart-7045303__480.jpg",
      homepage: "Зроби свій вибір",
      id: 2,
    },
  };
  componentDidMount() {
    this.setPostId(1);
  }
  componentDidUpdate() {
    this.setPostId(1);
  }
  /* */
  newsService = new NewsService();

  setPostId = (id) => {
    this.newsService.getAllPosts().then((res) => {
      res.map((item) => {
        if (id === item.id) {
          this.setState({
            postId: item.id,
            item: item,
          });
        }
      });
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <RandomChar />
          <div className="char__content">
            <CharList setPostId={this.setPostId} />
            <CharInfo item={this.state.item} />
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      </div>
    );
  }
}

export default App;
