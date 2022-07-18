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
    item: {},
  };

  /* */
  newsService = new NewsService();

  setPostId = (id) => {
    this.newsService.getAllPosts().then((res) => {
      res.map(item => {
        if (id === item.id) {
          this.setState({
            postId: item.id,
            item: item,
          });
        }
      })

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
