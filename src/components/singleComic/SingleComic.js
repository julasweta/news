import './singleComic.scss';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsService from "../../services/NewsService";



const SingleComic = (props) => {
  const [resPosts, setResPosts] = useState([]);
  const [item, setItem] = useState({});

  useEffect(() => {
    setPosts();
  }, []);

  useEffect(() => {
    setPost(props.getPostId);
  });

  let newsService = new NewsService();

  const  setPosts =()=> {
     newsService.getAllPosts().then((res) => {

       setResPosts(resPosts => res);
     });
  }

   const setPost = (id) => {
       resPosts.map((post) => {
         if (id === post.id) {
           setItem((item) => post);
         }
       });
   };



  return (
    <div className="single-comic">
      {console.log(item)}
      <img
        src={item.thumbnail}
        alt={item.thumbnail}
        className="single-comic__img"
      />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{item.name}</h2>
        <p className="single-comic__descr">{item.description}</p>
        <p className="single-comic__descr">144 pages</p>
        <p className="single-comic__descr">Language: en-us</p>
        <div className="single-comic__price">9.99$</div>
      </div>
      <Link to="/" className="single-comic__back">
        До всіх новин
      </Link>
    </div>
  );
};

export default SingleComic;
