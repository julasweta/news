import { Fragment, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from "../comicsList/ComicsList";
import NewsService from "../../services/NewsService";
import SingleComic from "../singleComic/SingleComic";



const App = (props) => {

  const [postId, setId] = useState(5);
  const [postItem, setItem] = useState({});
  const [resPosts, setResPosts] = useState([]);

  useCallback(() => {
    setPostId(postId);
  }, [postId]);



  let newsService = new NewsService();

  function setPostId(id) {
    newsService.getAllPosts().then((res) => {
      res.map((item) => {
        if (id === item.id) {
          setId(postId => id);
          setItem(postItem => item);
     localStorage.setItem("postId", id);
        }
      });
      setResPosts(resPosts => res)
    });
  };

  function getPostId() {
    let id = localStorage.getItem('postId');
    return Number(id);
  }

  return (
    <BrowserRouter>
      {
        <>
          <div className="app">
            <AppHeader />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <RandomChar />
                      <>
                        <div className="char__content">
                          <CharList setPostId={setPostId} />
                          <CharInfo item={postItem} resPosts={resPosts} />
                        </div>
                      </>
                    </>
                  }
                ></Route>
                <Route
                  path="/post"
                  element={
                    <SingleComic getPostId={getPostId()} />
                  }
                ></Route>
                <Route path="/eur" element={<ComicsList />}></Route>
              </Routes>
            </main>
          </div>
        </>
      }
    </BrowserRouter>
  );

}

export default App;
