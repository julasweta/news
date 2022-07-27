import { useEffect, useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import NewsService from "../../services/NewsService";

const App = (props) => {

  const [postId, setId] = useState(0);
  const [postItem, setItem] = useState({});
  const [resPosts, setResPosts] = useState([]);

  useEffect(() => {
  setPostId(postId);
  }, [postId]);


  let newsService = new NewsService();

  function setPostId(id) {
    newsService.getAllPosts().then((res) => {
      res.map((item) => {
        if (id === item.id) {
          setId(postId => id);
          setItem(postItem => item);
        }
      });
      setResPosts(resPosts => res)
    });
  };


  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList setPostId={setPostId} />
          <CharInfo item={postItem} resPosts = {resPosts} />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );

}

export default App;
